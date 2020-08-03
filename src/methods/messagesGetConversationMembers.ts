import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export interface ConversationMember {
  member_id: number
  invited_by: number
  join_date: number
  is_admin: boolean
}

export interface MessagesGetConversationMembersResponse {
  count: number
  items: Array<ConversationMember>
  profiles: Array<unknown>
  groups: Array<unknown>
}

const conversationMemberDecoder = JsonDecoder.object<ConversationMember>({
  member_id: JsonDecoder.number,
  invited_by: JsonDecoder.number,
  join_date: JsonDecoder.number,
  is_admin: JsonDecoder.oneOf([
    JsonDecoder.boolean,
    JsonDecoder.isUndefined(false)
  ], 'Is admin')
}, 'Conversation member decoder')

const messagesGetConversationMembersDecoder = JsonDecoder.object<MessagesGetConversationMembersResponse>({
  count: JsonDecoder.number,
  items: JsonDecoder.array(conversationMemberDecoder, 'Items decoder'),
  profiles: JsonDecoder.array(JsonDecoder.succeed, 'Profiles decoder'),
  groups: JsonDecoder.array(JsonDecoder.succeed, 'Groups decoder')
}, 'messages.getConversationMembers decoder')

const messagesGetConversationMembers = async (vk: VK, peerId: number): Promise<MessagesGetConversationMembersResponse> => (
  await makeVkRequest(
    'messages.getConversationMembers',
    vk.accessToken,
    messagesGetConversationMembersDecoder,
    { peer_id: peerId }
  )
)

export default messagesGetConversationMembers