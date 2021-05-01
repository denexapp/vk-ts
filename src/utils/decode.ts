import { JsonDecoder } from 'ts.data.json'
import VkError, { VkErrorCode } from './vkError'

const decode = <T>(body: unknown, decoder: JsonDecoder.Decoder<T>): T => {
  const result = decoder.decode(body)

  if (!result.isOk()) {
    console.error(`
Can't decode this object:
${JSON.stringify(body)}
`)
    throw new VkError(VkErrorCode.VkTsUnknownError, result.error)
  }

  return result.value
}

export default decode
