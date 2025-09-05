/**
 * Basic configuration for unBase
 */
export interface UnbaseConfig {
  /** Deployment mode */
  mode: 'embedded' | 'standalone' | 'remote'
  /** Remote server URL (for remote mode) */
  remoteUrl?: string
  /** Server port (for standalone mode) */
  port?: number
}
