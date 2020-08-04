import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export interface Message {
  date: number
  from_id: number
  peer_id: number
  text: string
}

export interface MessagesSearchResponse {
  count: number
  items: Array<Message>
}

const messageDecoder = JsonDecoder.object<Message>({
  date: JsonDecoder.number,
  from_id: JsonDecoder.number,
  peer_id: JsonDecoder.number,
  text: JsonDecoder.string
}, 'Message decoder')

const messagesSearchDecoder = JsonDecoder.object<MessagesSearchResponse>({
  count: JsonDecoder.number,
  items: JsonDecoder.array(messageDecoder, 'Messages decoder')
}, 'messages.search Decoder')

const messagesSearch = async (vk: VK, query: string): Promise<MessagesSearchResponse> => (
  await makeVkRequest(
    'messages.search',
    vk.accessToken,
    messagesSearchDecoder,
    {
      query
    }
  )
)

export default messagesSearch