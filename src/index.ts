import accountGetProfileInfo from './methods/accountGetProfileInfo'
import docsGet from './methods/docsGet'
import docsGetUploadServer from './methods/docsGetUploadServer'
import docsSave from './methods/docsSave'
import docsUpload from './methods/docsUpload'
import messagesDelete from './methods/messagesDelete'
import messagesGetByConversationMessageId from './methods/messagesGetByConversationMessageId'
import messagesGetConversationMembers from './methods/messagesGetConversationMembers'
import messagesRemoveChatUser from './methods/messagesRemoveChatUser'
import messagesSearch from './methods/messagesSearch'
import messagesSend from './methods/messagesSend'
import usersGet from './methods/usersGet'
import utilsResolveScreenName from './methods/utilsResolveScreenName'

class VK {
  accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  messagesDelete = messagesDelete.bind(this, this)
  messagesGetByConversationMessageId = messagesGetByConversationMessageId.bind(this, this)
  messagesGetConversationMembers = messagesGetConversationMembers.bind(this, this)
  messagesRemoveChatUser = messagesRemoveChatUser.bind(this, this)
  messagesSearch = messagesSearch.bind(this, this)
  messagesSend = messagesSend.bind(this, this)
  accountGetProfileInfo = accountGetProfileInfo.bind(this, this)
  utilsResolveScreenName = utilsResolveScreenName.bind(this, this)
  usersGet = usersGet.bind(this, this)
  docsGet = docsGet.bind(this, this)
  docsGetUploadServer = docsGetUploadServer.bind(this, this)
  docsSave = docsSave.bind(this, this)
  docsUpload = docsUpload.bind(this, this)
}

export * from './models'
export { default as VkError, VkErrorCode } from './utils/vkError'
export default VK
