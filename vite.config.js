import { defineConfig } from 'vite'

// The repo is served from https://<user>.github.io/TravelJapan/
// so the build needs to know assets live under /TravelJapan/.
// In local dev (npm run dev) the base is '/' so everything works at localhost.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/TravelJapan/' : '/',
  server: {
    host: true // lets you open the dev server on your phone via your computer's LAN IP
  }
})
