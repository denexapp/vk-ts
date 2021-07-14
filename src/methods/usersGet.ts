import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import { User, userDecoder } from '../models/user'
import makeVkRequest from '../utils/makeVkRequest'

export type UsersGetResponse = Array<User>

const usersGetDecoder: JsonDecoder.Decoder<UsersGetResponse> = JsonDecoder.array(userDecoder, 'users.get decoder')

const usersGet = async (vk: VK, userIds?: Array<number>): Promise<UsersGetResponse> =>
  await makeVkRequest('users.get', vk.accessToken, vk.settings.lang, usersGetDecoder, {
    user_ids: userIds?.join(' '),
    fields: 'sex',
  })

export default usersGet
