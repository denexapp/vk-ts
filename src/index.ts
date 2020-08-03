import messagesDelete from './methods/messagesDelete'
import messagesSend from './methods/messagesSend'
import messagesGetConversationMembers from './methods/messagesGetConversationMembers'
import accountGetProfileInfo from './methods/accountGetProfileInfo'

class VK {
  accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  messagesDelete = messagesDelete(this.accessToken)
  messagesGetConversationMembers = messagesGetConversationMembers(this.accessToken)
  messagesSend = messagesSend(this.accessToken)
  accountGetProfileInfo = accountGetProfileInfo(this.accessToken)
}

export default VK