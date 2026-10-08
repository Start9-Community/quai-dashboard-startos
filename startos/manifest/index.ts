import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'quai-dashboard',
  title: 'Quai Mining Dashboard',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/quai-dashboard-startos',
  upstreamRepo: 'https://github.com/Start9-Community/quai-dashboard-startos',
  marketingUrl: 'https://www.awfulwafflemining.com',
  donationUrl:
    'https://github.com/Start9-Community/quai-dashboard-startos/blob/main/DONATE.md',
  description: { short, long },
  volumes: ['main'],
  images: {
    dashboard: {
      source: { dockerBuild: {} },
      arch: ['x86_64'],
      emulateMissing: false,
    },
  },
})
