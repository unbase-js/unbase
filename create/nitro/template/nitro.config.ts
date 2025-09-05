import { defineNitroConfig } from "nitropack/config"

export default defineNitroConfig({
  plugins: [
    '@unbase-js/unbase'
  ],
  compatibilityDate: "latest",
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
})
