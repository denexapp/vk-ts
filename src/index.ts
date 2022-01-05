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
import videoSave from './methods/videoSave'
import videoUpload from './methods/videoUpload'

interface VkSettings {
  lang: number | undefined
}

const defaultSettings: VkSettings = {
  lang: undefined, // English
}

class VK {
  accessToken: string
  settings: VkSettings

  constructor(accessToken: string, settings?: Partial<VkSettings>) {
    this.accessToken = accessToken
    this.settings = {
      ...defaultSettings,
      ...settings,
    }
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
  videoSave = videoSave.bind(this, this)
  videoUpload = videoUpload.bind(this, this)
}

export * from './models'
export { default as VkError, VkErrorCode } from './utils/vkError'
export default VK
