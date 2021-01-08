import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'
import { ArrayResponse, arrayResponseDecoder } from '../utils/typesAndDecoders/arrayResponse'

export interface Document {
  id: number
  owner_id: number
  title: string
  url: string
}

export type DocsGetResponse = ArrayResponse<Document>

const documentDecoder = JsonDecoder.object<Document>(
  {
    id: JsonDecoder.number,
    owner_id: JsonDecoder.number,
    title: JsonDecoder.string,
    url: JsonDecoder.string,
  },
  'Document decoder'
)

const docsGetDecoder = arrayResponseDecoder<Document>(documentDecoder, 'docs.get decoder')

const docsGet = async (vk: VK, query: string): Promise<DocsGetResponse> =>
  await makeVkRequest('docs.get', vk.accessToken, docsGetDecoder, {
    q: query,
  })

export default docsGet
