# 旅の日本語 · Travel Japanese

An interactive, mobile-first webpage for practising **travel Japanese** — listening, speaking, and reading — through full real-life dialogues.

The first scenario is **ordering at a restaurant** 🍜, from being seated all the way to paying the bill.

## ✨ What it does

- **Listening** 🔊 — tap any line to hear it spoken in Japanese (browser text-to-speech). A 🐢 *Slow* button reads tricky lines slowly.
- **Speaking** 🎤 — tap *Practice* on your lines, say them out loud, and get a pronunciation match score. Where voice recognition isn't available (notably iPhone), it falls back to a play-and-self-check mode.
- **Reading** 📖 — toggle **furigana** (kana over kanji), **rōmaji**, and **English** on/off so you can dial the difficulty up as you improve.
- **Play all** ▶︎ — listen to the whole conversation hands-free.

Everything runs in the browser — no server, no accounts, no API keys, no cost.

## 🛠 Tech

- [Vite](https://vitejs.dev/) + vanilla JavaScript (no framework to learn)
- Web Speech API for text-to-speech and speech recognition
- Deployed to GitHub Pages via GitHub Actions

## 🚀 Run it locally

```bash
npm install      # first time only
npm run dev      # start the dev server
```

Open the printed `http://localhost:5173` URL.

**To test on your phone:** the dev server also prints a `Network:` URL
(e.g. `http://192.168.1.x:5173`). Open that on your phone while it's on the
same Wi-Fi as your computer.

> 🎤 Microphone & speech features need a **secure context**. `localhost` and
> the live GitHub Pages site (HTTPS) both qualify; opening the raw `index.html`
> file does not.

## 📱 A note on iPhone

On iOS, **every browser (including Chrome) uses Safari's WebKit engine**, so
they all behave the same. Listening and reading work great; voice-recognition
support is newer and less reliable than on Android, so the speaking feature
degrades gracefully to a self-check mode when needed.

## 🌐 Deploy

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. Enable it once under **Settings → Pages → Build and deployment →
Source → GitHub Actions**. The site then lives at:

```
https://tyj2025.github.io/TravelJapan/
```

## 🗺 Roadmap

- More scenarios (train station, hotel check-in, convenience store, asking directions)
- A scenario picker / home screen
- Vocabulary review and spaced repetition
- Recording playback so you can hear yourself
