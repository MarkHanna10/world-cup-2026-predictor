import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// VITE_BASE sets the public path, e.g. "/world-cup-2026-predictor/" for GitHub Pages.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
