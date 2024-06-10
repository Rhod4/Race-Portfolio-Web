// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/pinia.ts',
    '~/plugins/axios.client.ts'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/main.css'
  ],
})
