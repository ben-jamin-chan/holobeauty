import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to add CSP headers only in production
const addCSPToHTML = () => ({
  name: 'add-csp-to-html',
  transformIndexHtml: {
    order: 'post',
    handler(html, context) {
      // Only add CSP in production builds
      if (context.bundle) {
        return html.replace(
          '<!-- CSP removed for development - will be added during build for production -->',
          '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; font-src \'self\' https://fonts.gstatic.com; img-src \'self\' data: https:; connect-src \'self\' https: wss:; media-src \'self\'; object-src \'none\'; child-src \'self\'; worker-src \'self\'; form-action \'self\';" />'
        ).replace(
          '<meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />',
          '<meta http-equiv="X-Frame-Options" content="DENY" />'
        )
      }
      return html
    }
  }
})

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    addCSPToHTML()
  ],
  base: mode === 'production' ? '/holobeauty/' : '/', // 👈 Only set base in production
}))
