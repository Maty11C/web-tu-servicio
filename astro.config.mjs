// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages: https://<owner>.github.io/<repo>/
// En GitHub Actions existen GITHUB_REPOSITORY_OWNER y GITHUB_REPOSITORY.
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'Maty11C';
const repo =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'web-tu-servicio';

// https://astro.build/config
export default defineConfig({
  site: `https://${owner}.github.io`,
  base: `/${repo}`,
  vite: {
    plugins: [tailwindcss()],
  },
});
