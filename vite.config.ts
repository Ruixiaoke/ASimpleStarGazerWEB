import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const normalizeBasePath = (value: string | undefined) => {
  if (!value || value === "/") {
    return "/";
  }

  const trimmed = value.replace(/^\/+/g, "").replace(/\/+$/g, "");
  return `/${trimmed}/`;
};

const repositoryBasePath = (() => {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) {
    return undefined;
  }

  const segments = repository.split("/");
  const repoName = segments[segments.length - 1];
  return repoName ? `/${repoName}/` : undefined;
})();

const basePath = normalizeBasePath(
  process.env.VITE_BASE_PATH ?? repositoryBasePath
);

export default defineConfig({
  // 允许通过 VITE_BASE_PATH 覆盖，默认部署到根目录
  base: basePath,
  plugins: [react()],
  build: {
    sourcemap: true, // 可选：方便调试
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
