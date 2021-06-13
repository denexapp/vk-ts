import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export interface SavedDocResponse {
  type: 'doc'
  doc: unknown
}
export interface SavedAudioMessageResponse {
  type: 'audio_message'
  audio_message: unknown
}

export type DocsSaveResponse = SavedDocResponse | SavedAudioMessageResponse

const savedDocResponseDecoder = JsonDecoder.object<SavedDocResponse>(
  {
    type: JsonDecoder.isExactly('doc'),
    doc: JsonDecoder.succeed,
  },
  'SavedDocResponse'
)

const savedAudioMessageResponseDecoder = JsonDecoder.object<SavedAudioMessageResponse>(
  {
    type: JsonDecoder.isExactly('audio_message'),
    audio_message: JsonDecoder.succeed,
  },
  'SavedAudioMessageResponse'
)

const docsGetUploadServerDecoder = JsonDecoder.oneOf<DocsSaveResponse>(
  [savedDocResponseDecoder, savedAudioMessageResponseDecoder],
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
