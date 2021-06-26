import axios from 'axios'
import { getUserToken } from '@/utils/user'
import handleError from './handleError'
import setConfig from './setConfig'
import handleResponse from './handleResponse'
import { showTip } from '@/utils/msg'

/**
 * intactRequest是只在axios基础上更改了请求配置。
 * 而request是基于axios创建的实例，实例只有常见的数据请求方法，没有axios.isCancel/ axios.CancelToken等方法，
 * 也就是没有**取消请求**和**批量请求**的方法。
 * 所以如果需要在实例中调用取消某个请求的方法（例如取消上传），请用intactRequest。
 */
const intactRequest = setConfig(axios)
const request = setConfig(intactRequest.create())

// 请求中的api
const pendingPool = new Map()

function handleGlobalConfig(config) {
  const token = getUserToken()
  if (token) {
    config.headers.Authorization = token
  }
}

const requestInterceptorId = request.interceptors.request.use(
  config => {
    // 对于异常的响应也需要在pendingPool中将其删除，但响应拦截器中的异常响应有些获取不到请求信息，这里将其保存在实例上
    request.config = Object.assign({}, config)
    // 在发送请求之前做些什么
    handleGlobalConfig(config)
    config.cancelToken = new axios.CancelToken((cancelFn) => {
      pendingPool.has(config.url) ? cancelFn(`${config.url}请求重复`) : pendingPool.set(config.url, { cancelFn, global: config.global })
    })
    return config
  },
  err => {
    // TODO 用 vue logger
    console.log('请求拦截err:', err)
    return Promise.reject(err)
  }
)

const responseInterceptorId = request.interceptors.response.use(
  response => {
    const { config } = response
    pendingPool.delete(config.url)
    return Promise.resolve(
      handleResponse(response)
    )
  },
  error => {
    const { config } = request
    if (!axios.isCancel(error)) {
      pendingPool.delete(config.url)
    }

    if (!error) {
      return Promise.reject(error)
    }

    if (error.response) {
      error = handleError(error)
      // eslint-disable-next-line brace-style
    }

    // 没有response(没有状态码)的情况
    // eg: 超时；断网；请求重复被取消；主动取消请求；
    else {
      // 错误信息error传入isCancel方法，可以判断请求是否被取消
      if (axios.isCancel(error)) {
        throw new axios.Cancel(error.message || `请求'${request.config.url}'被取消`)
      } else if (error.stack && error.stack.includes('timeout')) {
        error.message = '请求超时!'
      } else {
        error.message = '连接服务器失败!'
      }
    }
    showTip(error.message)
    return Promise.reject(error)
  }
)

// 移除全局的请求拦截器
function removeRequestInterceptors() {
  request.interceptors.request.eject(requestInterceptorId)
}

// 移除全局的响应拦截器
function removeResponseInterceptors() {
  request.interceptors.response.eject(responseInterceptorId)
}

/**
 * 清除所有pending状态的请求
 * @param {Array} whiteList 白名单，里面的请求不会被取消
 * 返回值 被取消了的api请求
 */
function clearPendingPool(whiteList = []) {
  if (!pendingPool.size) return

  // const pendingUrlList = [...pendingPool.keys()].filter((url) => !whiteList.includes(url))
  const pendingUrlList = Array.from(pendingPool.keys()).filter((url) => !whiteList.includes(url))
  if (!pendingUrlList.length) return

  pendingUrlList.forEach((pendingUrl) => {
    // 清除掉所有非全局的pending状态下的请求
    if (!pendingPool.get(pendingUrl).global) {
      pendingPool.get(pendingUrl).cancelFn()
      pendingPool.delete(pendingUrl)
    }
  })

  return pendingUrlList
}

request.removeRequestInterceptors = removeRequestInterceptors
request.removeResponseInterceptors = removeResponseInterceptors
request.clearPendingPool = clearPendingPool

export { intactRequest, request }
