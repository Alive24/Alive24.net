// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'service-worker'
  },
  app: {
    head: {
      title: 'Alive的工作台'
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxtjs/i18n', '@nuxt/content', '@nuxtjs/device'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
