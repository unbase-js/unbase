// packages/unbase/tests/plugin.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock c12
vi.mock('c12', () => ({
  loadConfig: vi.fn()
}))

// Mock des adapters
vi.mock('../src/adapters/embedded', () => ({
  setupEmbeddedMode: vi.fn()
}))

vi.mock('../src/adapters/standalone', () => ({
  setupStandaloneMode: vi.fn()
}))

vi.mock('../src/adapters/remote', () => ({
  setupRemoteMode: vi.fn()
}))

import { loadConfig } from 'c12'
import { setupEmbeddedMode } from '../src/adapters/embedded'
import { setupStandaloneMode } from '../src/adapters/standalone'
import { setupRemoteMode } from '../src/adapters/remote'

describe('Nitro Plugin', () => {
  const mockNitroApp = {
    router: {
      get: vi.fn(),
      post: vi.fn()
    },
    hooks: {
      hook: vi.fn()
    }
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should load config and setup embedded mode by default', async () => {
    const mockLoadConfig = vi.mocked(loadConfig)
    mockLoadConfig.mockResolvedValue({
      config: { mode: 'embedded' }
    })

    // Import dynamique pour éviter les problèmes de hoisting
    const { default: plugin } = await import('../src/index')
    
    await plugin(mockNitroApp)

    expect(mockLoadConfig).toHaveBeenCalledWith({
      name: 'unbase',
      defaults: { mode: 'embedded' }
    })
    expect(setupEmbeddedMode).toHaveBeenCalledWith(mockNitroApp, { mode: 'embedded' })
  })

  it('should setup standalone mode when configured', async () => {
    const mockLoadConfig = vi.mocked(loadConfig)
    mockLoadConfig.mockResolvedValue({
      config: { mode: 'standalone', port: 3001 }
    })

    const { default: plugin } = await import('../src/index')
    
    await plugin(mockNitroApp)

    expect(setupStandaloneMode).toHaveBeenCalledWith(mockNitroApp, { mode: 'standalone', port: 3001 })
  })

  it('should setup remote mode when configured', async () => {
    const mockLoadConfig = vi.mocked(loadConfig)
    mockLoadConfig.mockResolvedValue({
      config: { mode: 'remote', remoteUrl: 'https://api.example.com' }
    })

    const { default: plugin } = await import('../src/index')
    
    await plugin(mockNitroApp)

    expect(setupRemoteMode).toHaveBeenCalledWith(mockNitroApp, { mode: 'remote', remoteUrl: 'https://api.example.com' })
  })

  it('should fallback to embedded mode on config error', async () => {
    const mockLoadConfig = vi.mocked(loadConfig)
    mockLoadConfig.mockRejectedValue(new Error('Config not found'))

    const { default: plugin } = await import('../src/index')
    
    await plugin(mockNitroApp)

    expect(setupEmbeddedMode).toHaveBeenCalledWith(mockNitroApp, { mode: 'embedded' })
  })

  it('should use embedded mode when no mode specified', async () => {
    const mockLoadConfig = vi.mocked(loadConfig)
    mockLoadConfig.mockResolvedValue({
      config: { port: 3001 } // Pas de mode spécifié
    })

    const { default: plugin } = await import('../src/index')
    
    await plugin(mockNitroApp)

    expect(setupEmbeddedMode).toHaveBeenCalledWith(mockNitroApp, { port: 3001, mode: 'embedded' })
  })
})
