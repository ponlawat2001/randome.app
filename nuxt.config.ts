// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@formkit/auto-animate", "@nuxtjs/google-fonts"],
  css: [ '~/style/default.scss' ]
}
)