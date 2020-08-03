import { JsonDecoder } from 'ts.data.json'
import makeVkRequest from '../utils/makeVkRequest'

export interface AccountGetProfileInfoResponse {
  first_name: string
  last_name: string
  id: number
}

const accountGetProfileInfoDecoder = JsonDecoder.object<AccountGetProfileInfoResponse>({
  first_name: JsonDecoder.string,
  last_name: JsonDecoder.string,
  id: JsonDecoder.number
}, 'account.getProfileInfo decoder')

const accountGetProfileInfo = (accessToken: string) => async (): Promise<AccountGetProfileInfoResponse> => (
  await makeVkRequest(
    'account.getProfileInfo',
    accessToken,
    accountGetProfileInfoDecoder
  )
)

export default accountGetProfileInfo