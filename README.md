unBase
The Edge-First TypeScript BaaS for UnJS ecosystem


Features
	•	🚀 Edge-First: Deploy on Cloudflare Workers, Vercel Edge, Netlify Edge	•	🔧 Zero Config: Works immediately without setup	•	📱 Multi-Mode: Embedded, standalone, or remote deployment	•	🗃️ Unified Database: SQL, NoSQL, and KV with one API	•	🔐 Built-in Auth: JWT authentication with OAuth providers	•	📊 Admin Interface: Built-in admin panel for data management	•	🎯 TypeScript Native: Full type safety and IntelliSense
Quick Start
# Install unBase
pnpm add @unbase-js/unbase

# Or create a new project
pnpm create unbase-nitro my-app
pnpm create unbase-nuxt my-app
Usage
Nitro
// nitro.config.ts
export default defineNitroConfig({
  plugins: ['@unbase-js/unbase'],
  unbase: {
    mode: 'embedded',
    database: {
      driver: 'sqlite',
      url: './data/app.db'
    }
  }
})
Nuxt
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    plugins: ['@unbase-js/unbase'],
    unbase: {
      mode: 'embedded'
    }
  }
})
Documentation
Visit https://unbase-js.dev for full documentation.
Development
This is a monorepo managed with pnpm workspaces:
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test
License
MIT © Your Name