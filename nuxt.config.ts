export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    "@nuxthq/studio",
  ],
  plausible: {
    domain: "nuxt-themes.github.io",
  },
  // plugins: ["~/plugins/preview.client.ts"],
});
