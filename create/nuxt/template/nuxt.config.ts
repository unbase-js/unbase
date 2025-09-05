export default defineNuxtConfig({
  nitro: {
    plugins: [
      '@unbase-js/unbase'
    ],
    unbase: {
      mode: 'embedded',
      database: {
        driver: 'sqlite',
        url: './data/app.db'
      },
      auth: {
        jwt: {
          secret: process.env.JWT_SECRET || 'your-super-secret-key'
        }
      }
    }
  }
})
