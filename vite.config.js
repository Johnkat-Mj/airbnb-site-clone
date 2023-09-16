import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      libs: `${path.resolve(__dirname, "./src/libs/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      datas: `${path.resolve(__dirname, "./src/datas/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
    },
  },
})
