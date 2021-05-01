import accountGetProfileInfo from './methods/accountGetProfileInfo'
import docsGet from './methods/docsGet'
import messagesDelete from './methods/messagesDelete'
import messagesGetByConversationMessageId from './methods/messagesGetByConversationMessageId'
import messagesGetConversationMembers from './methods/messagesGetConversationMembers'
import messagesSearch from './methods/messagesSearch'
import messagesSend from './methods/messagesSend'
import utilsResolveScreenName from './methods/utilsResolveScreenName'
import usersGet from './methods/usersGet'

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
  utilsResolveScreenName = utilsResolveScreenName.bind(this, this)
  usersGet = usersGet.bind(this, this)
  docsGet = docsGet.bind(this, this)
}

export { default as VkError, VkErrorCode } from './utils/vkError'
export { Sex } from './methods/usersGet'
export default VK
