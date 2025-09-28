import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use relative base so GitHub Pages (subpath) works without extra config
export default defineConfig({
  base: "./",
  plugins: [react()],
});
