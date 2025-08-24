import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.swiggy.com",  // target server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), 
      },
    },
  },
});

// This configuration sets up a proxy for API requests to Swiggy, allowing you to use relative paths in your application.