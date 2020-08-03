import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import getRandomInt from '../utils/getRandomInt'
import makeVkRequest from '../utils/makeVkRequest'

export type MessagesSendResponse = number

const messageSendDecoder = JsonDecoder.number

const messagesSend = async (vk: VK, peerId: number, message: string): Promise<MessagesSendResponse> => {
  return await makeVkRequest(
    'messages.send',
    vk.accessToken,
    messageSendDecoder,
    {
      message,
      peer_id: peerId,
      random_id: getRandomInt(0, 999999999999999).toString(10)
    }
  )
}

export default messagesSend