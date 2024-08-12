import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import pluginChecker from 'vite-plugin-checker';


export default defineConfig({
  plugins: [react(),pluginChecker({ typescript: false })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
