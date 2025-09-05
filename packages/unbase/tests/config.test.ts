// packages/unbase/tests/config.test.ts
import { describe, it, expect } from 'vitest'
import { defineUnbaseConfig } from '../src/index'
import type { UnbaseConfig } from '@unbase/types'

describe('defineUnbaseConfig', () => {
  it('should not handle empty config', () => {
    const config = {}
    const result = defineUnbaseConfig(config)
    
    expect(result).toEqual({})
  })

  it('should return the same config object', () => {
    const config: UnbaseConfig = {
      mode: 'embedded'
    }
    
    const result = defineUnbaseConfig(config)
    
    expect(result).toEqual(config)
    expect(result.mode).toBe('embedded')
  })
  
  it('should handle partial config', () => {
    const config: UnbaseConfig = {
      mode: 'standalone',
      port: 3001
    }
    
    const result = defineUnbaseConfig(config)
    
    expect(result.mode).toBe('standalone')
    expect(result.port).toBeUndefined()
    expect(result.port).toBe(3001)
  })
  
  it('should preserve all config properties', () => {
    const config: UnbaseConfig = {
      mode: 'remote',
      port: 4000,
      remoteUrl: 'https://api.example.com'
    }
    
    const result = defineUnbaseConfig(config)
    
    expect(result).toStrictEqual(config)
    expect(Object.keys(result)).toHaveLength(3)
  })
})
