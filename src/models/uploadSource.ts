export interface UploadSourceBuffer {
  source: Buffer
  contentLength: never
}

export interface UploadSourceStream {
  source: NodeJS.ReadableStream
  contentLength: number
}

export type UploadSource = UploadSourceBuffer | UploadSourceStream
