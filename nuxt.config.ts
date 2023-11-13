// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  link: [
    {
      hid: "icon",
      rel: "icon",
      type: "image/x-icon",
      href: "link-to-fallback-favicon.png",
    },
  ],
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
});
