import messagesDelete from './methods/messagesDelete'
import messagesSend from './methods/messagesSend'
import messagesGetConversationMembers from './methods/messagesGetConversationMembers'
import accountGetProfileInfo from './methods/accountGetProfileInfo'

class VK {
  accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  messagesDelete = messagesDelete.bind(this, this)
  messagesGetConversationMembers = messagesGetConversationMembers.bind(this, this)
  messagesSend = messagesSend.bind(this, this)
  accountGetProfileInfo = accountGetProfileInfo.bind(this, this)
}

export default VK