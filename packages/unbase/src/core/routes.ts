// src/core/routes.ts
import { defineEventHandler, readBody } from 'h3'
import { BackendCore } from './api'

export function createApiRoutes(backend: BackendCore, mode: string, extraData: any = {}) {
  return {
    getUsers: defineEventHandler(async (event) => {
      return await backend.getUsers()
    }),
    
    createUser: defineEventHandler(async (event) => {
      const body = await readBody(event)
      return await backend.createUser(body)
    }),
    
    health: defineEventHandler(async (event) => {
      return { 
        status: 'ok', 
        mode,
        timestamp: new Date().toISOString(),
        ...extraData
      }
    })
  }
}

export function registerRoutes(router: any, routes: any) {
  router.get('/api/users', routes.getUsers)
  router.post('/api/users', routes.createUser)
  router.get('/api/health', routes.health)
}
