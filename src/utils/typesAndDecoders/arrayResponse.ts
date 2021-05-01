import { JsonDecoder } from 'ts.data.json'

export type ArrayResponse<T> = {
  count: number
  items: Array<T>
}

export const arrayResponseDecoder = <T>(
  decoder: JsonDecoder.Decoder<T>,
  name: string
): JsonDecoder.Decoder<ArrayResponse<T>> =>
  JsonDecoder.object(
    {
      count: JsonDecoder.number,
      items: JsonDecoder.array(decoder, 'ArrayResponse items decoder'),
    },
    name
  )
