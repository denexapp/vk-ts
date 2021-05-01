import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export type MessagesActivityType = 'typing' | 'audiomessage'

export type MessagesSetActivityResponse = 1

const messageSetActivityDecoder: JsonDecoder.Decoder<MessagesSetActivityResponse> = JsonDecoder.isExactly(1)

const messagesSetActivity = async (
  vk: VK,
  peerId: number,
  type: MessagesActivityType
): Promise<MessagesSetActivityResponse> => {
  return await makeVkRequest('mmessages.setActivity', vk.accessToken, messageSetActivityDecoder, {
    type,
    peer_id: peerId,
  })
}

export default messagesSetActivity
