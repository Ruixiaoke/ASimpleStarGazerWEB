import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure GitHub Pages builds fall back to the repository sub-path when no env override is provided.
const DEFAULT_PROD_BASE = "/ASimpleStarGazerWEB/";

const base =
  process.env.VITE_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? DEFAULT_PROD_BASE : "/");

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
