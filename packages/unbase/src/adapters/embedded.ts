// src/adapters/embedded.ts
import type { NitroApp } from 'nitropack'
import { BackendCore } from '../core/api'
import { createApiRoutes, registerRoutes } from '../core/routes'

export async function setupEmbeddedMode(nitroApp: NitroApp) {
  console.log('Setting up embedded mode...')
  
  const backend = new BackendCore({})
  const routes = createApiRoutes(backend, 'embedded')
  
  registerRoutes(nitroApp.router, routes)
  
  console.log('✅ Embedded mode setup complete - API routes added to /api/*')
}
