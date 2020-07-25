import { JsonDecoder } from 'ts.data.json'
import makeVkRequest from '../utils/makeVkRequest'
import getRandomInt from '../utils/getRandomInt'

export type MessagesSendResponse = number

const messageSendDecoder = JsonDecoder.number

const messagesSend = (accessToken: string) => async (peerId: number, message: string): Promise<MessagesSendResponse> => (
  await makeVkRequest(
    'messages.send',
    accessToken,
    messageSendDecoder,
    {
      message,
      peer_id: peerId,
      random_id: getRandomInt(0, 999999999999999).toString(10)
    }
  )
)

export default messagesSend