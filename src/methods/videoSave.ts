import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export interface VideoSaveResponse {
  access_key: string
  description: string
  owner_id: number
  title: string
  upload_url: string
  video_id: number
}

const videoSaveResponseDecoder = JsonDecoder.object<VideoSaveResponse>(
  {
    access_key: JsonDecoder.string,
    description: JsonDecoder.string,
    owner_id: JsonDecoder.number,
    title: JsonDecoder.string,
    upload_url: JsonDecoder.string,
    video_id: JsonDecoder.number,
  },
  'VideoSaveResponse'
)

const videoSave = async (
  vk: VK,
  name?: string,
  description?: string,
  isPrivate?: boolean,
  wallpost?: boolean,
  repeat?: boolean,
  albumId?: number,
  groupId?: number
): Promise<VideoSaveResponse> =>
  await makeVkRequest('video.save', vk.accessToken, vk.settings.lang, videoSaveResponseDecoder, {
    name,
    description,
    is_private: isPrivate,
    wallpost,
    repeat,
    album_id: albumId,
    group_id: groupId,
  })

export default videoSave
