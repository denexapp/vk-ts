import { JsonDecoder } from 'ts.data.json'

export interface Message {
  date: number
  from_id: number
  id: number
  peer_id: number
  text: string
}

export const messageDecoder = JsonDecoder.object<Message>({
  date: JsonDecoder.number,
  from_id: JsonDecoder.number,
  id: JsonDecoder.number,
  peer_id: JsonDecoder.number,
  text: JsonDecoder.string
}, 'Message decoder')
