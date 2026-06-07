import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages at model-citizn.github.io/exlcloud-site/
  base: '/exlcloud-site/',
  // If using custom domain (exlcloud.io), change to:
  // base: '/',
})
