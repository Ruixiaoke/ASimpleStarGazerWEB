import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // 固定 base 路径，确保在 GitHub Pages 项目页上能正常工作
  base: "/ASimpleStarGazerWEB/",
  plugins: [react()],
  build: {
    outDir: "docs",   // 直接输出到 docs 目录，方便 GitHub Pages 部署
    sourcemap: true,  // 可选：方便调试
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
