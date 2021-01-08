import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'
import { ArrayResponse, arrayResponseDecoder } from '../utils/typesAndDecoders/arrayResponse'
import { Message, messageDecoder } from '../utils/typesAndDecoders/message'

export type MessagesGetByConversationMessageIdResponse = ArrayResponse<Message>

const messagesGetByConversationMessageIdDecoder = arrayResponseDecoder<Message>(
  messageDecoder,
  'messages.getByConversationMessageId Decoder'
)

const messagesGetByConversationMessageId = async (
  vk: VK,
  peerId: number,
  conversationMessageId: number
): Promise<MessagesGetByConversationMessageIdResponse> =>
  await makeVkRequest(
    'messages.getByConversationMessageId',
    vk.accessToken,
    messagesGetByConversationMessageIdDecoder,
    {
      peer_id: peerId,
      conversation_message_ids: conversationMessageId,
    }
  )

export default messagesGetByConversationMessageId
