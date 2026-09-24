import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

// Whether to ask about confirmed rewards; the dashboard uses the node's RPC whenever it is reachable.
export const shape = z
  .object({
    rpcSharing: z.enum(['unset', 'enabled', 'declined']).catch('unset'),
  })
  .strip()

export const storeJson = FileHelper.json(
  {
    base: sdk.volumes.main,
    subpath: '/dashboard/store.json',
  },
  shape,
)
