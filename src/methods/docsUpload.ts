import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkUploadRequest from '../utils/makeVkUploadRequest'

export interface DocsUploadResponse {
  file: string
}

const docsUploadDecoder = JsonDecoder.object<DocsUploadResponse>(
  {
    file: JsonDecoder.string,
  },
  'docs.upload decoder'
)

const docsUpload = async (_vk: VK, url: string, file: NodeJS.ReadableStream | Buffer): Promise<DocsUploadResponse> =>
  await makeVkUploadRequest(url, 'file', file, docsUploadDecoder)

export default docsUpload
