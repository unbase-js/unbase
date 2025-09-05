import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  plugins: [
    './../../../packages/unbase/src'
  ],
  srcDir: "server",
  imports: false
})
