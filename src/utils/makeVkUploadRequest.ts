import fetch from 'node-fetch'
import FormData from 'form-data'
import { JsonDecoder } from 'ts.data.json'
import decode from './decode'
import VkError, { VkErrorCode } from './vkError'
import { getMimeType } from 'stream-mime-type'
import { UploadSource } from '..'

const makeVkUploadRequest = async <T>(
  url: string,
  fieldName: string,
  uploadSource: UploadSource,
  decoder: JsonDecoder.Decoder<T>,
  defaultContentType?: string,
  filename?: string
): Promise<T> => {
  const form = new FormData()

  if (uploadSource.source instanceof Buffer) {
    // file is a buffer
    const { mime } = await getMimeType(uploadSource.source, { strict: true })
    form.append(fieldName, uploadSource, { contentType: mime ?? defaultContentType })
  } else {
    // file is a stream
    const { mime, stream } = await getMimeType(uploadSource.source, { strict: true, filename })
    form.append(fieldName, stream, {
      contentType: mime ?? defaultContentType,
      filename,
      knownLength: uploadSource.contentLength,
    })
  }

  const response = await fetch(url, { method: 'POST', body: form })

  if (!response.ok) {
    throw new VkError(VkErrorCode.VkTsUnknownError, `Unexpected response status ${response.status}`)
  }

  const json = await response.json()

  return decode(json, decoder)
}

export default makeVkUploadRequest
