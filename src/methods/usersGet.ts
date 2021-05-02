import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export enum Sex {
  Unknown = 0,
  Female = 1,
  Male = 2,
}

export interface UsersGetUser {
  id: number
  first_name: string
  last_name: string
  can_access_closed: boolean
  is_closed: boolean
  sex: Sex
}

export type UsersGetResponse = Array<UsersGetUser>

const usersGetUserDecoder = JsonDecoder.object<UsersGetUser>(
  {
    id: JsonDecoder.number,
    first_name: JsonDecoder.string,
    last_name: JsonDecoder.string,
    can_access_closed: JsonDecoder.boolean,
    is_closed: JsonDecoder.boolean,
    sex: JsonDecoder.oneOf([JsonDecoder.isExactly(0), JsonDecoder.isExactly(1)], 'Sex'),
  },
  'UsersGetUser decoder'
)

const usersGetDecoder: JsonDecoder.Decoder<UsersGetResponse> = JsonDecoder.array(
  usersGetUserDecoder,
  'users.get decoder'
)

const usersGet = async (vk: VK, userIds?: Array<number>): Promise<UsersGetResponse> =>
  await makeVkRequest('users.get', vk.accessToken, usersGetDecoder, {
    user_ids: userIds?.join(' '),
    fields: 'sex',
  })

export default usersGet
