// src/adapters/standalone.ts
import { createServer } from 'node:http'
import { createApp, toNodeListener, createRouter } from 'h3'
import { BackendCore } from '../core/api'
import { createApiRoutes, registerRoutes } from '../core/routes'

export async function setupStandaloneMode(nitroApp: any, config: any) {
  console.log('Setting up standalone mode...')
  
  const port = config.port || 3001
  const backend = new BackendCore({})
  
  const app = createApp()
  const router = createRouter()
  
  const routes = createApiRoutes(backend, 'standalone', { port })
  registerRoutes(router, routes)
  
  app.use(router)
  
  const server = createServer(toNodeListener(app))
  
  server.listen(port, () => {
    console.log(`✅ Standalone server running on http://localhost:${port}`)
  })
  
  nitroApp.hooks.hook('close', () => {
    console.log('Closing standalone server...')
    server.close()
  })
  
  return server
}
