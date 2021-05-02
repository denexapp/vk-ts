import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export type MessagesRemoveChatUserResponse = 1

const messagesRemoveChatUserDecoder = JsonDecoder.isExactly<MessagesRemoveChatUserResponse>(1)

const messagesRemoveChatUser = async (
  vk: VK,
  chat_id: number,
  user_id: number
): Promise<MessagesRemoveChatUserResponse> =>
  await makeVkRequest('messages.removeChatUser', vk.accessToken, messagesRemoveChatUserDecoder, {
    chat_id,
    user_id,
  })

export default messagesRemoveChatUser
