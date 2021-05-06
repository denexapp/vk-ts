import fetch from 'cross-fetch'
import { JsonDecoder } from 'ts.data.json'
import decode from './decode'
import generateVkLink, { VkLinkParams } from './generateVkLink'
import VkError, { VkErrorCode } from './vkError'
import vkResponseDecoder from './vkResponseDecoder'

const makeVkRequest = async <T>(
  methodName: string,
  accessToken: string,
  decoder: JsonDecoder.Decoder<T>,
  params?: VkLinkParams
): Promise<T> => {
  const response = await fetch(generateVkLink(methodName, accessToken, params))

  if (!response.ok) {
    throw new VkError(VkErrorCode.VkTsUnknownError, `Unexpected response status ${response.status}`)
  }

  const json = await response.json()

  const value = decode(json, vkResponseDecoder)

  if (!value.success) {
    if (value.error.error_code === VkErrorCode.NoAccessToTheConversation) {
      throw new VkError(VkErrorCode.NoAccessToTheConversation, value.error.error_msg)
    }
    if (value.error.error_code === VkErrorCode.NoAccess) {
      throw new VkError(VkErrorCode.NoAccess, value.error.error_msg)
    }
    if (value.error.error_code === VkErrorCode.NoUserInChat) {
      throw new VkError(VkErrorCode.NoUserInChat, value.error.error_msg)
    }
    throw new VkError(
      VkErrorCode.VkTsUnknownError,
      `VK api responded with error:\nCode: ${value.error.error_code}\n${value.error.error_msg}`
    )
  }

  return decode(value.response, decoder)
}

export default makeVkRequest
