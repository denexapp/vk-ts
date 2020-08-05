import { JsonDecoder } from 'ts.data.json'
import { Message, messageDecoder } from '../utils/typesAndDecoders/message'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export interface MessagesSearchResponse {
  count: number
  items: Array<Message>
}

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
      q: query
    }
  )
)

export default messagesSearch