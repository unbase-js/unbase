// src/adapters/remote.ts
import { defineEventHandler, readBody } from 'h3'
import { createApiRoutes, registerRoutes } from '../core/routes'

export class RemoteBackendClient {
  constructor(private baseUrl: string) {}
  
  async getUsers() {
    const response = await fetch(`${this.baseUrl}/api/users`)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return await response.json()
  }
  
  async createUser(userData: any) {
    const response = await fetch(`${this.baseUrl}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return await response.json()
  }
}

export async function setupRemoteMode(nitroApp: any, config: any) {
  console.log('Setting up remote mode...')
  
  const remoteUrl = config.remoteUrl
  if (!remoteUrl) {
    throw new Error('remoteUrl is required for remote mode')
  }
  
  const client = new RemoteBackendClient(remoteUrl)
  const routes = createApiRoutes(client, 'remote', { remoteUrl })
  
  registerRoutes(nitroApp.router, routes)
  
  console.log(`✅ Remote mode setup complete - proxying to ${remoteUrl}`)
}
