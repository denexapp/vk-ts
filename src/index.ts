import accountGetProfileInfo from './methods/accountGetProfileInfo'
import messagesDelete from './methods/messagesDelete'
import messagesGetByConversationMessageId from './methods/messagesGetByConversationMessageId'
import messagesGetConversationMembers from './methods/messagesGetConversationMembers'
import messagesSearch from './methods/messagesSearch'
import messagesSend from './methods/messagesSend'

class VK {
  accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  messagesDelete = messagesDelete.bind(this, this)
  messagesGetByConversationMessageId = messagesGetByConversationMessageId.bind(this, this)
  messagesGetConversationMembers = messagesGetConversationMembers.bind(this, this)
  messagesSearch = messagesSearch.bind(this, this)
  messagesSend = messagesSend.bind(this, this)
  accountGetProfileInfo = accountGetProfileInfo.bind(this, this)
}

export { VkErrorCode, default as VkError } from './utils/vkError'
export default VK