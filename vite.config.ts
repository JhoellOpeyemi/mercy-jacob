import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})

// i want to be able to use absolute imports with the '@' symbol.
// i have added a resolve option to vite.config.ts, what should be done next