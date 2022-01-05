import VK from '../src/index'

describe('VK', () => {
  it('keeps access token', () => {
    const vk = new VK('test-token')
    expect(vk.accessToken).toEqual('test-token')
  })
})
