import { confirmedRewards } from '../actions/confirmedRewards'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const rewardsTask = sdk.setupOnInit(async (effects) => {
  const choice = await storeJson.read((s) => s.rpcSharing).const(effects)
  if (choice !== 'enabled' && choice !== 'declined') {
    await sdk.action.createOwnTask(effects, confirmedRewards, 'important', {
      reason: i18n(
        'Choose whether to ask the Quai Network node to share its RPC, which the dashboard needs to show what each workshare actually paid. The dashboard runs either way.',
      ),
    })
  }
})
