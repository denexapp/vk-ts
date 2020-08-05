import { JsonDecoder } from 'ts.data.json'
import { Message, messageDecoder } from 'utils/typesAndDecoders/message'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export interface MessagesGetByConversationMessageIdResponse {
  count: number
  items: Array<Message>
}

const messagesGetByConversationMessageIdDecoder = JsonDecoder.object<MessagesGetByConversationMessageIdResponse>({
  count: JsonDecoder.number,
  items: JsonDecoder.array(messageDecoder, 'Messages decoder')
}, 'messages.getByConversationMessageId Decoder')

const messagesGetByConversationMessageId = async (
  vk: VK,
  peerId: number,
  conversationMessageId: number
): Promise<MessagesGetByConversationMessageIdResponse> => (
  await makeVkRequest(
    'messages.getByConversationMessageId',
    vk.accessToken,
    messagesGetByConversationMessageIdDecoder,
    {
      peer_id: peerId,
      conversation_message_ids: conversationMessageId
    }
  )
)

export default messagesGetByConversationMessageId