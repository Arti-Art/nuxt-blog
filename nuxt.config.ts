// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: [
    '@/assets/main.css'
  ],
  // TRANSITIONS
  // app: {
  // pageTransition: { name: 'page', mode: 'out-in' }
  // !NB1! View transitions may not work as expected with nested pages/layouts/async components owing to this upstream Vue bug: https://github.com/vuejs/core/issues/5513. If you make use of this pattern, you may need to delay adopting this experimental feature or implement it yourself. Feedback is very welcome.
  // !NB2! If you perform data fetching within your page setup functions, that you may wish to reconsider using this feature for the moment. (By design, View Transitions completely freeze DOM updates whilst they are taking place.) We're looking at restrict the View Transition to the final moments before <Suspense> resolves, but in the interim you may want to consider carefully whether to adopt this feature if this describes you.
  // },
  runtimeConfig: {
    privateMessage: '',
    public: {
      firebaseDbUrl: process.env.FIREBASE_DB_URL,
      appUrl: process.env.APP_URL || 'http://localhost:3000', // when running on a real server, we can get access to process.env.APP_URL if we set it up beforehand
      message: 'Hello from nuxt.config (public message)',
      myMessage: 'This is a default that will be overwritten by the .env file (If I have one)',
      testing: process.env.NUXT_TESTING, // NB: if you don't like the 'magical replacing' done by Nuxt, you can manually access your env var like this
      // This way of doing also allows you name your env vars however you want (not just NUXT_*)
      // Learn about env variables and Nuxt Runtime Config https://nuxt.com/docs/guide/going-further/runtime-config
    }
  }
})
