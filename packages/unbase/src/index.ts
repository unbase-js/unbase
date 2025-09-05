import { loadConfig } from 'c12'
import type { UnbaseConfig } from '@unbase/types'
import { setupEmbeddedMode } from './adapters/embedded'
import { setupStandaloneMode } from './adapters/standalone'  
import { setupRemoteMode } from './adapters/remote'

export function defineUnbaseConfig(config: UnbaseConfig): UnbaseConfig {
  return config
}

// Re-exporter les types pour les utilisateurs
export type { UnbaseConfig } from '@unbase/types'

export default async function unbasePlugin(nitroApp) {
  console.log('UnBase plugin loaded!')
  
  try {
    // Charger unbase.config.ts depuis la racine du projet
    const { config } = await loadConfig({
      name: 'unbase',
      defaults: {
        mode: 'embedded'
      }
    })
    
    console.log('UnBase config loaded:', config)
    
    const mode = config.mode || 'embedded'
    console.log(`Setting up ${mode} mode...`)
    
    switch (mode) {
      case 'embedded':
        setupEmbeddedMode(nitroApp, config)
        break
      case 'standalone':
        setupStandaloneMode(nitroApp, config)
        break
      case 'remote':
        setupRemoteMode(nitroApp, config)
        break
    }
  } catch (error) {
    console.error('Failed to load unbase config:', error)
    // Fallback vers mode embedded
    setupEmbeddedMode(nitroApp, { mode: 'embedded' })
  }
}