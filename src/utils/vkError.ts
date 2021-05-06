export enum VkErrorCode {
  VkTsUnknownError = 0,
  NoAccess = 15,
  NoAccessToTheConversation = 917,
  NoUserInChat = 935,
}

class VkError extends Error {
  code: VkErrorCode

  constructor(errorCode: VkErrorCode, message?: string) {
    const errorMessage =
      errorCode === VkErrorCode.VkTsUnknownError
        ? `vk-ts unknown error, code: ${errorCode}, message: ${message}`
        : `vk api error, code: ${errorCode}, message: ${message}`
    super(errorMessage)
    this.code = errorCode
  }
}

export default VkError
