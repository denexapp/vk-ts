import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export type DocsSaveResponse = [unknown]

const docsGetUploadServerDecoder: JsonDecoder.Decoder<DocsSaveResponse> = JsonDecoder.tuple(
  [JsonDecoder.succeed],
  'docs.save decoder'
)

const docsSave = async (
  vk: VK,
  file: string,
  title?: string,
  tags?: string,
  returnTags?: boolean
): Promise<DocsSaveResponse> =>
  await makeVkRequest('docs.save', vk.accessToken, docsGetUploadServerDecoder, {
    file,
    title,
    tags,
    return_tags: returnTags,
  })

export default docsSave
