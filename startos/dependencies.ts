import { sdk } from './sdk'

export const dependencies = sdk.Dependencies.of().addDependency(
  sdk.Dependency.required('go-quai', {
    description:
      'The dashboard reads mining stats from your Quai Network node and starts once the node is synced.',
    metadata: {
      title: 'Quai Network',
      icon: 'https://raw.githubusercontent.com/Start9-Community/go-quai-startos/main/icon.svg',
    },
    versionRange: '>=0.56.0:11',
    kind: 'running',
    healthChecks: ['go-quai', 'sync'],
  }),
)
