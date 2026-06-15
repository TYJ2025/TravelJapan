import './style.css'
import { scenarios, getScenario } from './data/scenarios.js'
import {
  speak,
  stopSpeaking,
  ttsSupported,
  primeVoices,
  listJapaneseVoices,
  setPreferredVoice,
  getActiveVoiceURI,
  listenOnce,
  recognitionSupported,
  scoreAttempt
} from './speech.js'

// Display preferences (persisted so your settings survive a refresh).
const prefs = loadPrefs()

function loadPrefs() {
  try {
    return Object.assign(
      { furigana: true, romaji: true, english: true, rate: 0.92, voiceURI: '' },
      JSON.parse(localStorage.getItem('tj-prefs') || '{}')
    )
  } catch {
    return { furigana: true, romaji: true, english: true, rate: 0.92, voiceURI: '' }
  }
}

function savePrefs() {
  localStorage.setItem('tj-prefs', JSON.stringify(prefs))
}

const app = document.getElementById('app')

// ---------------------------------------------------------------------------
// Routing: the URL hash selects a scenario (e.g. #sushi). Empty = home.
// ---------------------------------------------------------------------------

function currentScenario() {
  const id = location.hash.replace(/^#/, '')
  return id ? getScenario(id) : null
}

function render() {
  stopSpeaking()
  app.classList.remove('show-menu') // always start on the dialogue tab
  const scenario = currentScenario()
  app.innerHTML = ''
  if (scenario) {
    renderScenario(scenario)
  } else {
    renderHome()
  }
  applyPrefClasses()
  window.scrollTo(0, 0)
}

window.addEventListener('hashchange', render)

// ---------------------------------------------------------------------------
// Home screen
// ---------------------------------------------------------------------------

function renderHome() {
  const header = el('header', 'header')
  header.innerHTML = `
    <div class="brand">旅の日本語</div>
    <h1>🍱 Travel Japanese</h1>
    <p class="subtitle">Practise ordering food — listening, speaking & reading. Pick a place to start.</p>
  `
  app.appendChild(header)

  const grid = el('div', 'home-grid')
  scenarios.forEach((s) => {
    const card = el('a', 'scenario-card')
    card.href = `#${s.id}`
    card.innerHTML = `
      <div class="scenario-emoji">${s.emoji}</div>
      <div class="scenario-text">
        <div class="scenario-title">${s.title}</div>
        <div class="scenario-jp">${s.titleJp}</div>
        <div class="scenario-desc">${s.description}</div>
        <div class="scenario-meta">${s.lines.length} lines</div>
      </div>
      <div class="scenario-chevron">›</div>
    `
    grid.appendChild(card)
  })
  app.appendChild(grid)

  app.appendChild(renderFooter())
}

// ---------------------------------------------------------------------------
// Scenario (dialogue) screen
// ---------------------------------------------------------------------------

function renderScenario(scenario) {
  app.appendChild(renderScenarioHeader(scenario))
  app.appendChild(renderSettings())
  if (scenario.menu) app.appendChild(renderTabs(scenario))
  app.appendChild(renderToolbar(scenario))
  app.appendChild(renderDialogue(scenario))
  if (scenario.menu) app.appendChild(renderMenu(scenario))
  app.appendChild(renderFooter())
}

// Tabs to switch between the conversation and the orderable menu.
function renderTabs(scenario) {
  const count = scenario.menu.reduce((n, s) => n + s.items.length, 0)
  const tabs = el('div', 'tabs')
  const tDialogue = el('button', 'tab on')
  tDialogue.textContent = '会話 · Dialogue'
  const tMenu = el('button', 'tab')
  tMenu.textContent = `メニュー · Menu (${count})`
  tDialogue.addEventListener('click', () => {
    stopSpeaking()
    app.classList.remove('show-menu')
    tDialogue.classList.add('on')
    tMenu.classList.remove('on')
    window.scrollTo(0, 0)
  })
  tMenu.addEventListener('click', () => {
    stopSpeaking()
    app.classList.add('show-menu')
    tMenu.classList.add('on')
    tDialogue.classList.remove('on')
    window.scrollTo(0, 0)
  })
  tabs.append(tDialogue, tMenu)
  return tabs
}

// The orderable menu: each dish has Listen + Practice for 「〜をお願いします」.
function renderMenu(scenario) {
  const wrap = el('div', 'menu')
  const intro = el('p', 'menu-intro')
  intro.innerHTML = 'Tap 🎤 to practise ordering: <b>「〜をお願いします」</b> (…please).'
  wrap.appendChild(intro)
  scenario.menu.forEach((section) => {
    const title = el('div', 'menu-section-title')
    title.textContent = section.title
    wrap.appendChild(title)
    section.items.forEach((item) => wrap.appendChild(renderMenuItem(item)))
  })
  return wrap
}

function renderMenuItem(item) {
  // Build the full ordering phrase from the dish name.
  const order = {
    jp: `${item.jp}をお願いします`,
    ruby: `${item.ruby}をお<ruby>願<rt>ねが</rt></ruby>いします`,
    romaji: `${item.romaji} o onegai shimasu`,
    en: `${item.en}, please`
  }

  const card = el('div', 'menu-item')
  const emoji = el('div', 'menu-emoji')
  emoji.textContent = item.emoji || '🍽'

  const body = el('div', 'menu-body')
  const jp = el('div', 'jp')
  jp.innerHTML = item.ruby
  const romaji = el('div', 'romaji')
  romaji.textContent = item.romaji
  const en = el('div', 'en')
  en.textContent = item.en

  const phrase = el('div', 'order-phrase')
  phrase.innerHTML = `👉 <span class="op-jp">${order.ruby}</span>`

  const controls = el('div', 'controls')
  const listenBtn = el('button', 'chip')
  listenBtn.innerHTML = '🔊 Listen'
  listenBtn.addEventListener('click', async () => {
    listenBtn.classList.add('busy')
    await speak(order.jp, { rate: prefs.rate })
    listenBtn.classList.remove('busy')
  })
  const speakBtn = el('button', 'chip chip-speak')
  speakBtn.innerHTML = '🎤 Practice'
  const feedback = el('div', 'feedback')
  speakBtn.addEventListener('click', () => practiceLine(order, speakBtn, feedback))
  controls.append(listenBtn, speakBtn)

  body.append(jp, romaji, en, phrase, controls, feedback)
  card.append(emoji, body)
  return card
}

// Voice + speed controls. The voice list lets you swap the robotic default
// for a higher-quality (downloaded "Enhanced") voice if your device has one.
function renderSettings() {
  const wrap = el('div', 'settings')
  if (!ttsSupported()) return wrap

  const voiceField = el('label', 'field')
  voiceField.innerHTML = '<span>🎙 Voice</span>'
  const voiceSel = el('select', 'select voice-select')
  voiceField.appendChild(voiceSel)
  wrap.appendChild(voiceField)

  const speedField = el('label', 'field')
  speedField.innerHTML = '<span>🐢 Speed</span>'
  const speedSel = el('select', 'select')
  ;[
    ['Slow', 0.7],
    ['Normal', 0.92],
    ['Native', 1.05]
  ].forEach(([label, val]) => {
    const o = el('option')
    o.value = String(val)
    o.textContent = label
    if (Math.abs(val - prefs.rate) < 0.001) o.selected = true
    speedField.appendChild(o)
    speedSel.appendChild(o)
  })
  speedField.appendChild(speedSel)
  speedSel.addEventListener('change', () => {
    prefs.rate = parseFloat(speedSel.value)
    savePrefs()
  })
  wrap.appendChild(speedField)

  voiceSel.addEventListener('change', () => {
    prefs.voiceURI = voiceSel.value
    setPreferredVoice(prefs.voiceURI)
    savePrefs()
    // Give an instant preview so the change is audible.
    speak('こんにちは', { rate: prefs.rate })
  })

  populateVoiceSelect(voiceSel)
  return wrap
}

function populateVoiceSelect(sel) {
  const voices = listJapaneseVoices()
  sel.innerHTML = ''
  if (!voices.length) {
    const o = el('option')
    o.textContent = 'Default'
    sel.appendChild(o)
    sel.disabled = true
    return
  }
  sel.disabled = false
  const auto = el('option')
  auto.value = ''
  auto.textContent = 'Auto (best available)'
  sel.appendChild(auto)
  const active = getActiveVoiceURI()
  voices.forEach((v) => {
    const o = el('option')
    o.value = v.voiceURI
    // Trim the verbose system prefix some platforms add.
    o.textContent = v.name.replace(/^Microsoft\s+|^Google\s+/, '')
    if (prefs.voiceURI ? v.voiceURI === prefs.voiceURI : false) o.selected = true
    sel.appendChild(o)
  })
  if (!prefs.voiceURI) {
    sel.value = ''
    auto.textContent = `Auto · ${voiceName(active) || 'best available'}`
  }
}

function voiceName(uri) {
  const v = listJapaneseVoices().find((x) => x.voiceURI === uri)
  return v ? v.name.replace(/^Microsoft\s+|^Google\s+/, '') : ''
}

// Repopulate any visible voice <select> once the async voice list arrives.
function refreshVoiceOptions() {
  const sel = app.querySelector('.voice-select')
  if (sel) populateVoiceSelect(sel)
}

function renderScenarioHeader(scenario) {
  const header = el('header', 'header')
  const back = el('a', 'back-link')
  back.href = '#'
  back.innerHTML = '‹ All scenarios'
  header.appendChild(back)

  const h = el('div', 'scenario-head')
  h.innerHTML = `
    <h1>${scenario.emoji} ${scenario.title}</h1>
    <p class="subtitle">${scenario.titleJp} · ${scenario.description}</p>
  `
  header.appendChild(h)
  return header
}

function renderToolbar(scenario) {
  const bar = el('div', 'toolbar')
  bar.appendChild(toggle('Furigana', 'furigana'))
  bar.appendChild(toggle('Rōmaji', 'romaji'))
  bar.appendChild(toggle('English', 'english'))

  const playAll = el('button', 'btn btn-primary play-all')
  playAll.innerHTML = '▶︎ Play all'
  let playing = false
  playAll.addEventListener('click', async () => {
    if (playing) {
      playing = false
      stopSpeaking()
      playAll.innerHTML = '▶︎ Play all'
      clearActive()
      return
    }
    playing = true
    playAll.innerHTML = '⏹ Stop'
    for (let i = 0; i < scenario.lines.length; i++) {
      if (!playing) break
      setActive(i)
      await speak(scenario.lines[i].jp, { rate: prefs.rate })
      await wait(250)
    }
    playing = false
    playAll.innerHTML = '▶︎ Play all'
    clearActive()
  })
  bar.appendChild(playAll)
  return bar
}

function toggle(label, key) {
  const b = el('button', 'btn btn-toggle')
  b.dataset.key = key
  b.textContent = label
  b.setAttribute('aria-pressed', String(prefs[key]))
  b.classList.toggle('on', prefs[key])
  b.addEventListener('click', () => {
    prefs[key] = !prefs[key]
    savePrefs()
    b.classList.toggle('on', prefs[key])
    b.setAttribute('aria-pressed', String(prefs[key]))
    applyPrefClasses()
  })
  return b
}

function renderDialogue(scenario) {
  const list = el('div', 'dialogue')
  scenario.lines.forEach((line, i) => list.appendChild(renderLine(line, i)))
  return list
}

function renderLine(line, index) {
  const row = el('div', `line line-${line.speaker}`)
  row.dataset.index = String(index)

  const avatar = el('div', 'avatar')
  avatar.textContent = line.speaker === 'staff' ? '🧑‍🍳' : '🙂'

  const bubble = el('div', 'bubble')

  const who = el('div', 'who')
  who.textContent = line.speaker === 'staff' ? '店員 · Staff' : 'あなた · You'

  const jp = el('div', 'jp')
  jp.innerHTML = line.ruby

  const romaji = el('div', 'romaji')
  romaji.textContent = line.romaji

  const en = el('div', 'en')
  en.textContent = line.en

  bubble.append(who, jp, romaji, en)

  const controls = el('div', 'controls')

  const listenBtn = el('button', 'chip')
  listenBtn.innerHTML = '🔊 Listen'
  listenBtn.addEventListener('click', async () => {
    setActive(index)
    listenBtn.classList.add('busy')
    await speak(line.jp, { rate: prefs.rate })
    listenBtn.classList.remove('busy')
    clearActive()
  })
  controls.appendChild(listenBtn)

  const slowBtn = el('button', 'chip')
  slowBtn.innerHTML = '🐢 Slow'
  slowBtn.addEventListener('click', async () => {
    setActive(index)
    slowBtn.classList.add('busy')
    await speak(line.jp, { rate: 0.6 })
    slowBtn.classList.remove('busy')
    clearActive()
  })
  controls.appendChild(slowBtn)

  if (line.speaker === 'you') {
    const speakBtn = el('button', 'chip chip-speak')
    speakBtn.innerHTML = '🎤 Practice'
    const feedback = el('div', 'feedback')
    speakBtn.addEventListener('click', () => practiceLine(line, speakBtn, feedback))
    controls.appendChild(speakBtn)
    bubble.appendChild(controls)
    bubble.appendChild(feedback)
  } else {
    bubble.appendChild(controls)
  }

  row.append(avatar, bubble)
  return row
}

async function practiceLine(line, btn, feedback) {
  if (!recognitionSupported()) {
    feedback.className = 'feedback show info'
    feedback.innerHTML = `
      <strong>Voice scoring isn't available in this browser.</strong>
      Say it out loud, then check yourself:
      <div class="reveal">${line.ruby}<br><span class="reveal-romaji">${line.romaji}</span></div>
    `
    await speak(line.jp, { rate: 0.7 })
    return
  }

  btn.classList.add('busy')
  btn.innerHTML = '🎙 Listening…'
  feedback.className = 'feedback show'
  feedback.textContent = 'Listening — say the line now.'

  try {
    const { transcript } = await listenOnce()
    const score = scoreAttempt(line.jp, transcript)
    const verdict =
      score >= 80 ? ['great', '🎉 Great!'] :
      score >= 55 ? ['ok', '👍 Close — try again'] :
                    ['low', '🔁 Keep practising']
    feedback.className = `feedback show ${verdict[0]}`
    feedback.innerHTML = `
      <div class="score">${verdict[1]} <span class="pct">${score}%</span></div>
      <div class="heard">You said: <b>${escapeHtml(transcript)}</b></div>
      <div class="target">Target: <b>${escapeHtml(line.jp)}</b></div>
    `
  } catch (err) {
    feedback.className = 'feedback show info'
    if (err.message === 'not-allowed') {
      feedback.textContent = '🎤 Microphone permission was denied. Enable it in your browser settings to practise speaking.'
    } else if (err.message === 'no-speech') {
      feedback.textContent = "🤫 I didn't catch anything — tap Practice and speak clearly."
    } else {
      feedback.textContent = '⚠️ Speech recognition is unavailable right now. Try the Listen button and repeat after it.'
    }
  } finally {
    btn.classList.remove('busy')
    btn.innerHTML = '🎤 Practice'
  }
}

function renderFooter() {
  const f = el('footer', 'footer')
  const tts = ttsSupported() ? '🔊 Listening ready' : '🔇 No speech voices on this browser'
  const rec = recognitionSupported()
    ? '🎤 Speaking ready'
    : '🎤 Speaking limited on this browser (self-check fallback active)'
  f.innerHTML = `
    <div class="status">${tts} · ${rec}</div>
    <div class="tip">Tip: tap any line to hear it. Use 🐢 Slow for tricky words.</div>
  `
  return f
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function applyPrefClasses() {
  app.classList.toggle('hide-furigana', !prefs.furigana)
  app.classList.toggle('hide-romaji', !prefs.romaji)
  app.classList.toggle('hide-english', !prefs.english)
}

function setActive(index) {
  clearActive()
  const row = app.querySelector(`.line[data-index="${index}"]`)
  if (row) {
    row.classList.add('active')
    row.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

function clearActive() {
  app.querySelectorAll('.line.active').forEach((r) => r.classList.remove('active'))
}

function el(tag, className) {
  const node = document.createElement(tag)
  if (className) node.className = className
  return node
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function escapeHtml(s) {
  const d = document.createElement('div')
  d.textContent = s
  return d.innerHTML
}

// Apply any saved voice choice, and keep the picker in sync as the (async)
// voice list loads in. Prime on first interaction (required by Safari/iOS).
setPreferredVoice(prefs.voiceURI)
primeVoices(() => {
  setPreferredVoice(prefs.voiceURI)
  refreshVoiceOptions()
})

function primeOnce() {
  primeVoices(() => {
    setPreferredVoice(prefs.voiceURI)
    refreshVoiceOptions()
  })
  refreshVoiceOptions()
  window.removeEventListener('pointerdown', primeOnce)
}
window.addEventListener('pointerdown', primeOnce)

render()
