import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
interface ImportMetaEnv {
  readonly SECRET_KEY: string
  readonly API_SERVICE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}