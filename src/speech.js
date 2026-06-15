// ---------------------------------------------------------------------------
// Speech helpers: Text-to-Speech (listening) + Speech Recognition (speaking).
//
// Both use the browser's built-in Web Speech API — no server, no API keys.
// Behaviour differs by browser, especially on iPhone (Safari/Chrome use the
// same WebKit engine), so every function degrades gracefully.
// ---------------------------------------------------------------------------

// ----- Text-to-Speech (listening) -----------------------------------------

let cachedJaVoice = null

// Voices load asynchronously on some browsers; grab the best Japanese one.
function pickJapaneseVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []
  if (!voices.length) return null
  // Prefer a voice explicitly tagged ja / ja-JP.
  const ja = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('ja'))
  return ja || null
}

export function ttsSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

// Warm up the voice list (call once on first user interaction).
export function primeVoices() {
  if (!ttsSupported()) return
  cachedJaVoice = pickJapaneseVoice()
  window.speechSynthesis.onvoiceschanged = () => {
    cachedJaVoice = pickJapaneseVoice()
  }
}

// Speak Japanese text. rate < 1 is slower (good for learning).
export function speak(text, { rate = 0.9 } = {}) {
  return new Promise((resolve) => {
    if (!ttsSupported()) {
      resolve(false)
      return
    }
    window.speechSynthesis.cancel() // stop anything already playing
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ja-JP'
    u.rate = rate
    const voice = cachedJaVoice || pickJapaneseVoice()
    if (voice) u.voice = voice
    u.onend = () => resolve(true)
    u.onerror = () => resolve(false)
    window.speechSynthesis.speak(u)
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
