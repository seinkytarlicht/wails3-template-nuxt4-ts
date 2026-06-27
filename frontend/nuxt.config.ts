// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear();
    },
  },
  router: {
    options: {
      hashMode: true,
    },
  },
  devServer: {
    host: "127.0.0.1",
  },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "@wailsio/runtime"],
    },
  },
  // Auto Imports
  // Binding Wails Service to Nuxt, Now can use Service without importing file
  imports: {
    dirs: ["../bindings/**"],
  },
});
