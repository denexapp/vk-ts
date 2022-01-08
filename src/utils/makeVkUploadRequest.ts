import fetch from 'node-fetch'
import FormData from 'form-data'
import { JsonDecoder } from 'ts.data.json'
import decode from './decode'
import VkError, { VkErrorCode } from './vkError'
import { getMimeType } from 'stream-mime-type'

const makeVkUploadRequest = async <T>(
  url: string,
  fieldName: string,
  file: NodeJS.ReadableStream | Buffer,
  decoder: JsonDecoder.Decoder<T>,
  defaultContentType?: string
): Promise<T> => {
  const form = new FormData()

  if (file instanceof Buffer) {
    // file is a buffer
    const { mime } = await getMimeType(file, { strict: true })
    form.append(fieldName, file, { contentType: mime ?? defaultContentType })
  } else {
    // file is a stream
    const { mime, stream } = await getMimeType(file, { strict: true })
    getMimeType(file, { strict: true })
    form.append(fieldName, stream, { contentType: mime ?? defaultContentType })
  }

  const response = await fetch(url, { method: 'POST', body: form })

  if (!response.ok) {
    throw new VkError(VkErrorCode.VkTsUnknownError, `Unexpected response status ${response.status}`)
  }

  const json = await response.json()

  return decode(json, decoder)
}

export default makeVkUploadRequest
