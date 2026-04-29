import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', // <-- Add this line. Use your repo name.
  plugins: [react()],
})