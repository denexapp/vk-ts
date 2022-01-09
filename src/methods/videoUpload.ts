import { JsonDecoder } from 'ts.data.json'
import VK, { UploadSource } from '..'
import consts from '../utils/consts'
import makeVkUploadRequest from '../utils/makeVkUploadRequest'

export interface VideoUploadResponse {
  size: number
  video_id: number
}

const videoUploadDecoder = JsonDecoder.object<VideoUploadResponse>(
  {
    size: JsonDecoder.number,
    video_id: JsonDecoder.number,
  },
  'VideoUploadResponse'
)

const videoUpload = async (
  _vk: VK,
  url: string,
  videoFile: UploadSource
): Promise<VideoUploadResponse> =>
  await makeVkUploadRequest(
    url,
    'video_file',
    videoFile,
    videoUploadDecoder,
    consts.defaultVideoMimeType,
    consts.defaultVideoFilename
  )

export default videoUpload
