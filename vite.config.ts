import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { EsLinter, TypeScriptLinter, linterPlugin } from 'vite-plugin-linter';

// https://vite.dev/config/
export default defineConfig((configEnv) => {
  return {
    plugins: [
      react(),
      linterPlugin({
        include: [
          './src/**/*.{ts,tsx}',
        ],
        linters: [
          new EsLinter({
            configEnv
          }),
          new TypeScriptLinter()
        ],
      }),
    ],
  }
})
