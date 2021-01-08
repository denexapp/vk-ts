import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'
import { ArrayResponse, arrayResponseDecoder } from "../utils/typesAndDecoders/arrayResponse"
import { Message, messageDecoder } from '../utils/typesAndDecoders/message'

export type MessagesSearchResponse = ArrayResponse<Message>

const messagesSearchDecoder = arrayResponseDecoder<Message>(messageDecoder, 'messages.search Decoder')

const messagesSearch = async (vk: VK, query: string): Promise<MessagesSearchResponse> =>
  await makeVkRequest('messages.search', vk.accessToken, messagesSearchDecoder, {
    q: query,
  })

export default messagesSearch
