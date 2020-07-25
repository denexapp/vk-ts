import { JsonDecoder } from 'ts.data.json'
import makeVkRequest from '../utils/makeVkRequest'

export type DeletedStatus = 0 | 1

export interface MessagesDeleteResponse { [id: string]: DeletedStatus }

const messagesDeleteDecoder = JsonDecoder.dictionary<DeletedStatus>(
  JsonDecoder.oneOf([
    JsonDecoder.constant(0),
    JsonDecoder.constant(1)
  ], 'Deleted status'),
  'messages.delete decoder'
)

const messagesDelete = (accessToken: string) => async (id: number, delete_for_all: boolean): Promise<MessagesDeleteResponse> => (
  await makeVkRequest(
    'messages.delete',
    accessToken,
    messagesDeleteDecoder,
    {
      message_ids: id,
      delete_for_all
    }
  )
)

export default messagesDelete