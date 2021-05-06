import { JsonDecoder } from 'ts.data.json'
import VkError, { VkErrorCode } from './vkError'

const decode = <T>(body: unknown, decoder: JsonDecoder.Decoder<T>): T => {
  const result = decoder.decode(body)

  if (!result.isOk()) {
    let stringifiedObject = JSON.stringify(body)

    if (stringifiedObject.length > 2048) {
      stringifiedObject = 'The object is too big to include in logs'
    }

    console.error(`
Can't decode this object:
${stringifiedObject}
`)
    throw new VkError(VkErrorCode.VkTsUnknownError, result.error)
  }

  return result.value
}

export default decode
