import { JsonDecoder } from 'ts.data.json'

export enum Sex {
  Unknown = 0,
  Female = 1,
  Male = 2,
}

export interface User {
  id: number
  first_name: string
  last_name: string
  can_access_closed: boolean
  is_closed: boolean
  sex: Sex
}

export const userDecoder = JsonDecoder.object<User>(
  {
    id: JsonDecoder.number,
    first_name: JsonDecoder.string,
    last_name: JsonDecoder.string,
    can_access_closed: JsonDecoder.oneOf([JsonDecoder.boolean, JsonDecoder.isUndefined(false)], 'Can access closed'),
    is_closed: JsonDecoder.oneOf([JsonDecoder.boolean, JsonDecoder.isUndefined(false)], 'Is closed'),
    sex: JsonDecoder.oneOf([JsonDecoder.isExactly(0), JsonDecoder.isExactly(1), JsonDecoder.isExactly(2)], 'Sex'),
  },
  'UsersGetUser decoder'
)
