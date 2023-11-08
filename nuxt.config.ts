// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir:"src/",
  modules:['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
});
