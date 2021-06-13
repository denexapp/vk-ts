import fetch from 'cross-fetch'
import { JsonDecoder } from 'ts.data.json'
import decode from './decode'
import VkError, { VkErrorCode } from './vkError'

const makeVkUploadRequest = async <T>(url: string, file: Blob, decoder: JsonDecoder.Decoder<T>): Promise<T> => {
  const form = new FormData()
  form.append('file', file)
  
  const response = await fetch(url, { method: 'POST', body: form })

  if (!response.ok) {
    throw new VkError(VkErrorCode.VkTsUnknownError, `Unexpected response status ${response.status}`)
  }

  const json = await response.json()

  return decode(json, decoder)
}

export default makeVkUploadRequest
