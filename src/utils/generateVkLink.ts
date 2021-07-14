import consts from '../utils/consts'

export interface VkLinkParams {
  [key: string]: Array<number> | string | number | boolean | undefined
}

interface TransformedParams {
  [key: string]: string | number
}

const transformParams = (params?: VkLinkParams) => {
  if (params === undefined) {
    return {}
  }

  const result = Object.entries(params).reduce<TransformedParams>((result, [name, value]) => {
    if (typeof value === 'boolean') {
      result[name] = value ? 1 : 0
    } else if (typeof value === 'string' || typeof value === 'number') {
      result[name] = value
    }
    return result
  }, {})

  return result
}

const generateVkLink = (
  methodName: string,
  accessToken: string,
  lang: number | undefined,
  params?: VkLinkParams
): string => {
  const transformedParams = transformParams(params)
  const transfomedLang = transformParams({ lang })

  const query = new URLSearchParams({
    ...transformedParams,
    ...transfomedLang,
    access_token: accessToken,
    v: consts.vkApiVersion,
  })

  return `https://api.vk.com/method/${methodName}?${query}`
}

export default generateVkLink
