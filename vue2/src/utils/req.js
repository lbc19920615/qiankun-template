/**
 * req
 * @author lbc
 */

import * as pathToRegexp from 'path-to-regexp'
import { request } from '@/plugins/request'
import to from 'await-to-js'

/**
 *
 * @param option
 * @returns {(function(*=, {instanceConf?: *, urlParams?: *}=): Promise<*>)|*}
 */
export function createRequest(option) {
  let { method, url, config } = option
  method = method.toUpperCase()
  const keyName = ['PUT', 'POST', 'PATCH'].includes(method) ? 'data' : 'params'

  return async (dataOrParams = {}, {
    instanceConf = {},
    urlParams = {}
  } = {}) => {
    let trueUrl = pathToRegexp.compile(url)(urlParams)
    // console.log(urlParams, trueUrl)
    const [err, response] = await to(request({
      method,
      url: trueUrl,
      // [keyName]: method === 'POST' ? qs.stringify(dataOrParams) : dataOrParams,
      [keyName]: dataOrParams,
      ...Object.assign(config || {}, instanceConf)
    }))
    if (err) {
      // console.error(err)
      return Promise.reject(err)
    }
    if (response) {
      if (response.code !== 200) {
        return Promise.reject(new Error(`${response.code}: ${response.message}`))
      } else {
        return Promise.resolve(response.data)
      }
    } else {
      return Promise.reject(new Error('response is null'))
    }
  }
}

/**
 * decorator GET
 * @param url { string }
 * @param config { { urlParams: {} } }
 * @returns {(function(*, *, *): void)|*}
 * @constructor
 */
export function GET(url, config = {}) {
  return function (target, key, descriptor) {
    descriptor.value = createRequest({
      method: 'get',
      url,
      config
    })
  }
}

/**
 * decorator POST
 * @param url { string }
 * @param config { {} }
 * @returns {(function(*, *, *): void)|*}
 * @constructor
 */
export function POST(url, config = {}) {
  return function (target, key, descriptor) {
    descriptor.value = createRequest({
      method: 'post',
      url,
      config
    })
  }
}

/**
 * decorator PUT
 * @param url { string }
 * @param config { {} }
 * @returns {(function(*, *, *): void)|*}
 * @constructor
 */
export function PUT(url, config = {}) {
  return function (target, key, descriptor) {
    descriptor.value = createRequest({
      method: 'put',
      url,
      config
    })
  }
}

/**
 * decorator DELETE
 * @param url { string }
 * @param config { {} }
 * @returns {(function(*, *, *): void)|*}
 * @constructor
 */
export function DELETE(url, config = {}) {
  return function (target, key, descriptor) {
    descriptor.value = createRequest({
      method: 'delete',
      url,
      config
    })
  }
}
