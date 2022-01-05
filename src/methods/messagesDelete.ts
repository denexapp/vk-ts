import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'
import VkError, { VkErrorCode } from '../utils/vkError'

export interface MessagesDelete {
  (vk: VK, messageId: number, deleteForAll: boolean): Promise<MessagesDeleteResponse>
  (vk: VK, messageIds: Array<number>, deleteForAll: boolean): Promise<MessagesDeleteResponse>
  (vk: VK, conversationMessageId: number, peerId: number, deleteForAll: boolean): Promise<MessagesDeleteResponse>
  (
    vk: VK,
    conversationMessageIds: Array<number>,
    peerId: number,
    deleteForAll: boolean
  ): Promise<MessagesDeleteResponse>
}

export type DeletedStatus = 0 | 1

export interface MessagesDeleteResponse {
  [id: string]: DeletedStatus
}

const messagesDeleteDecoder = JsonDecoder.dictionary<DeletedStatus>(
  JsonDecoder.oneOf([JsonDecoder.constant(0), JsonDecoder.constant(1)], 'Deleted status'),
  'messages.delete decoder'
)

const messagesDelete: MessagesDelete = async (
  vk: VK,
  param2: number | Array<number>,
  param3: number | boolean,
  param4?: boolean
): Promise<MessagesDeleteResponse> => {
  let messageIds: Array<number> | undefined
  let conversationMessageIds: Array<number> | undefined
  let peerId: number | undefined
  let deleteForAll: boolean

  const ids = param2 instanceof Array ? param2 : [param2]

  if (typeof param3 === 'number') {
    // Delete by conversationMessageId mode
    if (typeof param4 !== 'boolean') {
      throw new VkError(VkErrorCode.VkTsUnknownError, 'Unexpected function overload. Check function parameters')
    }
    conversationMessageIds = ids
    peerId = param3
    deleteForAll = param4
  } else {
    // Delete by messageId
    messageIds = ids
    deleteForAll = param3
  }

  return await makeVkRequest('messages.delete', vk.accessToken, vk.settings.lang, messagesDeleteDecoder, {
    message_ids: messageIds,
    conversation_message_ids: conversationMessageIds,
    peer_id: peerId,
    delete_for_all: deleteForAll,
  })
}

export default messagesDelete
