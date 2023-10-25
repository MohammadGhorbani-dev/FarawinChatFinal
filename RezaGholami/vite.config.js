import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // proxy: {
    //   "/chat": {
    //     target: "https://farawin.iran.liara.run/api",
    //     changeOrigin: true,
    //     secure: true,
    //   }
    // },
  },
});
