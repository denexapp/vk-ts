import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export interface DocsGetUploadServerResponse {
  upload_url: string
}

const docsGetUploadServerDecoder = JsonDecoder.object<DocsGetUploadServerResponse>(
  {
    upload_url: JsonDecoder.string,
  },
  'docs.getUploadServer decoder'
)

const docsGetUploadServer = async (vk: VK, groupId?: number): Promise<DocsGetUploadServerResponse> =>
  await makeVkRequest('docs.getUploadServer', vk.accessToken, docsGetUploadServerDecoder, {
    group_id: groupId,
  })

export default docsGetUploadServer
