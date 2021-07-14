import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export interface AccountGetProfileInfoResponse {
  first_name: string
  last_name: string
  id: number
}

const accountGetProfileInfoDecoder = JsonDecoder.object<AccountGetProfileInfoResponse>(
  {
    first_name: JsonDecoder.string,
    last_name: JsonDecoder.string,
    id: JsonDecoder.number,
  },
  'account.getProfileInfo decoder'
)

const accountGetProfileInfo = async (vk: VK): Promise<AccountGetProfileInfoResponse> =>
  await makeVkRequest('account.getProfileInfo', vk.accessToken, vk.settings.lang, accountGetProfileInfoDecoder)

export default accountGetProfileInfo
