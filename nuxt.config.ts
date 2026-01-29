import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({

  modules: [
    ['@nuxt/eslint', {
      config: {
        stylistic: {
          semi: true,
          quotes: 'double',
        },
      },
    }],
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  // css: ['@picocss/pico'],
  build: {
    transpile: ['vuetify'],
  }, compatibilityDate: '2025-07-15',
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
