import {
  mainHostId,
  rpcHostId,
  stratumApiPort,
  stratumInterfaceIds,
  shaPort,
  scryptPort,
  kawpowPort,
  zoneRpcPort,
} from 'go-quai-startos/startos/utils'

export const uiPort = 8080
export const mountpoint = '/data'

export const nodePackageId = 'go-quai'
export const nodeStratumHostId = mainHostId
export const nodeStratumApiPort = stratumApiPort
export const nodeRpcHostId = rpcHostId
export const nodeRpcPort = zoneRpcPort

export const stratumInterfaces = {
  sha256: { id: stratumInterfaceIds.sha256, internalPort: shaPort },
  scrypt: { id: stratumInterfaceIds.scrypt, internalPort: scryptPort },
  kawpow: { id: stratumInterfaceIds.kawpow, internalPort: kawpowPort },
} as const
