import * as pathToRegexp from 'path-to-regexp'
import { request } from '@/plugins/request'

export function createRequest(option) {
  let { method, url, config } = option
  method = method.toUpperCase()
  const keyName = ['PUT', 'POST', 'PATCH'].includes(method) ? 'data' : 'params'

  return (dataOrParams = {}, {
    instanceConf = {},
    urlParams = {}
  } = {}) => {
    let trueUrl = pathToRegexp.compile(url)(urlParams)
    // console.log(urlParams, trueUrl)
    return request({
      method,
      url: trueUrl,
      // [keyName]: method === 'POST' ? qs.stringify(dataOrParams) : dataOrParams,
      [keyName]: dataOrParams,
      ...Object.assign(config || {}, instanceConf)
    })
  }
}

export function GET(url, config = {}) {
  return function (target, key, descriptor) {
    descriptor.value = createRequest({
      method: 'get',
      url,
      config
    })
  }
}

export function POST(url, config = {}) {
  return function (target, key, descriptor) {
    descriptor.value = createRequest({
      method: 'post',
      url,
      config
    })
  }
}
