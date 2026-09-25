import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => ({
  'go-quai': {
    kind: 'running' as const,
    versionRange: '>=0.56.0:11',
    healthChecks: ['go-quai', 'sync'],
  },
}))
