import { JsonDecoder } from 'ts.data.json'
import VK from '..'
import makeVkRequest from '../utils/makeVkRequest'

export type ScreenNameType = 'user' | 'group' | 'application'

export interface UtilsResolveScreenNameEmptyResponse extends Array<never> {}

export interface UtilsResolveScreenNameSuccessResponse {
  type: ScreenNameType
  object_id: number
}

export type UtilsResolveScreenNameResponse = UtilsResolveScreenNameEmptyResponse | UtilsResolveScreenNameSuccessResponse

const utilsResolveScreenNameDecoder: JsonDecoder.Decoder<UtilsResolveScreenNameResponse> =
  JsonDecoder.oneOf<UtilsResolveScreenNameResponse>(
    [
      JsonDecoder.tuple([], 'UtilsResolveScreenNameEmptyResponse'),
      JsonDecoder.object(
        {
          type: JsonDecoder.oneOf<ScreenNameType>(
            [JsonDecoder.isExactly('user'), JsonDecoder.isExactly('group'), JsonDecoder.isExactly('application')],
            'ScreenNameType'
          ),
          object_id: JsonDecoder.number,
        },
        'UtilsResolveScreenNameSuccessResponse'
      ),
    ],
    'UtilsResolveScreenNameResponse'
  )

const utilsResolveScreenName = async (vk: VK, screenName: string): Promise<UtilsResolveScreenNameResponse> => {
  return await makeVkRequest(
    'utils.resolveScreenName',
    vk.accessToken,
    vk.settings.lang,
    utilsResolveScreenNameDecoder,
    {
      screen_name: screenName,
    }
  )
}

export default utilsResolveScreenName
