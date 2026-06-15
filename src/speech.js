// ---------------------------------------------------------------------------
// Speech helpers: Text-to-Speech (listening) + Speech Recognition (speaking).
//
// Both use the browser's built-in Web Speech API — no server, no API keys.
// Behaviour differs by browser, especially on iPhone (Safari/Chrome use the
// same WebKit engine), so every function degrades gracefully.
// ---------------------------------------------------------------------------

// ----- Text-to-Speech (listening) -----------------------------------------

let cachedJaVoice = null
let preferredVoiceURI = null // user's manual choice, if any

export function ttsSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

// All Japanese voices the device offers.
export function listJapaneseVoices() {
  const voices = ttsSupported() ? window.speechSynthesis.getVoices() : []
  return voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('ja'))
}

// Score a voice so we can auto-pick the most natural one. Higher = better.
// "Enhanced"/"Premium"/"Neural" voices (which the user can download for free)
// sound far less robotic than the tiny default "compact" voices.
function voiceQuality(v) {
  const name = (v.name || '').toLowerCase()
  let score = 0
  if (/(enhanced|premium|neural|natural)/.test(name)) score += 100
  if (/(siri)/.test(name)) score += 60
  // Known good named Japanese voices (vs the basic default).
  if (/(o-ren|otoya|hattori|sakura|kyoko)/.test(name)) score += 20
  if (/(compact|eloquence)/.test(name)) score -= 40 // low-fi voices
  if (v.localService) score += 5
  return score
}

// Pick the best available Japanese voice (respecting a manual choice).
function pickJapaneseVoice() {
  const ja = listJapaneseVoices()
  if (!ja.length) return null
  if (preferredVoiceURI) {
    const chosen = ja.find((v) => v.voiceURI === preferredVoiceURI)
    if (chosen) return chosen
  }
  return ja.slice().sort((a, b) => voiceQuality(b) - voiceQuality(a))[0]
}

export function setPreferredVoice(voiceURI) {
  preferredVoiceURI = voiceURI || null
  cachedJaVoice = pickJapaneseVoice()
}

export function getActiveVoiceURI() {
  const v = cachedJaVoice || pickJapaneseVoice()
  return v ? v.voiceURI : null
}

// Warm up the voice list (call once on first user interaction).
export function primeVoices(onReady) {
  if (!ttsSupported()) return
  cachedJaVoice = pickJapaneseVoice()
  window.speechSynthesis.onvoiceschanged = () => {
    cachedJaVoice = pickJapaneseVoice()
    if (typeof onReady === 'function') onReady()
  }
}

// Split a line into natural phrases at Japanese punctuation, so each clause
// gets its own gentle pause instead of one flat, run-on robotic delivery.
function intoPhrases(text) {
  return text
    .split(/(?<=[、。！？「」])/)
    .map((s) => s.trim())
    .filter(Boolean)
}

// Speak Japanese text. rate < 1 is slower (good for learning); a touch of
// pitch variation and clause-by-clause delivery make it sound more natural.
export function speak(text, { rate = 0.92, pitch = 1.0 } = {}) {
  return new Promise((resolve) => {
    if (!ttsSupported()) {
      resolve(false)
      return
    }
    window.speechSynthesis.cancel() // stop anything already playing
    const voice = cachedJaVoice || pickJapaneseVoice()
    const phrases = intoPhrases(text)
    let i = 0

    const sayNext = () => {
      if (i >= phrases.length) {
        resolve(true)
        return
      }
      const u = new SpeechSynthesisUtterance(phrases[i++])
      u.lang = 'ja-JP'
      u.rate = rate
      u.pitch = pitch
      if (voice) u.voice = voice
      u.onend = sayNext
      u.onerror = () => resolve(false)
      window.speechSynthesis.speak(u)
    }
    sayNext()
  })
}

export function stopSpeaking() {
  if (ttsSupported()) window.speechSynthesis.cancel()
}

// ----- Speech Recognition (speaking) --------------------------------------

const SpeechRecognition =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null

export function recognitionSupported() {
  return !!SpeechRecognition
}

// Listen for one Japanese utterance.
// Resolves with { transcript } or rejects with an Error (incl. 'no-speech',
// 'not-allowed' for denied mic permission, etc.).
export function listenOnce() {
  return new Promise((resolve, reject) => {
    if (!SpeechRecognition) {
      reject(new Error('unsupported'))
      return
    }
    const rec = new SpeechRecognition()
    rec.lang = 'ja-JP'
    rec.interimResults = false
    rec.maxAlternatives = 3
    let settled = false

    rec.onresult = (event) => {
      settled = true
      const alts = Array.from(event.results[0]).map((a) => a.transcript)
      resolve({ transcript: alts[0], alternatives: alts })
    }
    rec.onerror = (event) => {
      if (!settled) reject(new Error(event.error || 'error'))
    }
    rec.onend = () => {
      if (!settled) reject(new Error('no-speech'))
    }
    try {
      rec.start()
    } catch (e) {
      reject(new Error('start-failed'))
    }
    // Expose a stopper in case the UI wants to cancel.
    return rec
  })
}

// ----- Scoring: compare what you said to the target ------------------------

// Strip punctuation/spaces so comparison focuses on the sounds.
function normalize(s) {
  return (s || '')
    .replace(/[。、！？!?.,\s「」『』・]/g, '')
    .trim()
}

// Levenshtein edit distance (how many single-character edits apart).
function editDistance(a, b) {
  const m = a.length
  const n = b.length
  if (!m) return n
  if (!n) return m
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)])
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost)
    }
  }
  return dp[m][n]
}

// Returns a 0–100 similarity score between the spoken text and the target.
// Recognition may return kanji where you'd expect kana (or vice-versa), so
// this is intentionally lenient — it rewards "close enough".
export function scoreAttempt(target, spoken) {
  const t = normalize(target)
  const s = normalize(spoken)
  if (!t || !s) return 0
  const dist = editDistance(t, s)
  const score = Math.round((1 - dist / Math.max(t.length, s.length)) * 100)
  return Math.max(0, score)
}
