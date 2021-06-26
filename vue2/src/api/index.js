/**api管理页面
 * apiMap: 统一管理所有api地址、对应的请求方式及自定义别名
 * 导出一个对象requestMap，属性名为apiMap中定义的别名，也就是调用时的名称，值为实际请求方法
 * 方法接收两个对象参数，第一个为需要传递的数据，第二个为请求头的配置信息。
 * 语法： api[alias](paramsOrData, headersConfig)
 * 第一个参数：如果为put/post/patch方法中的一种，会被转化为data属性；其余则是params
 * 第二个参数：请求头信息
 *
 * let xx = await this.$api.getBanner({ account: '18038018084', psw: '2' })
 * let vv = await this.$api.login({ account: '18038018084', psw: '2' })
 *
 * 如果类似post的方法需要通过url后缀形式传递参数，在第二个参数config加上params属性即可：
 * let vv = await this.$api.login({ account: '18038018084', psw: '2' },{ params: {} })
 *
 * 自定义请求头信息：
 * let xx = await this.$api.getBanner({}, {timeout: 1000, headers:{ aaa: 111 }})
 */
import { request } from '@/plugins/request'
// import qs from 'qs'
// console.log('qs:', qs)

const apiMap = {
  getBanner: { method: 'get', url: '/home/banner' },
  login: { method: 'post', url: '/login' }
}

function injectRequest(apiObj) {
  const requestMap = {}
  Object.keys(apiObj).forEach((alias) => {
    let { method, url, config } = apiObj[alias]
    method = method.toUpperCase()
    requestMap[alias] = (dataOrParams = {}, instanceConf = {}) => {
      const keyName = ['PUT', 'POST', 'PATCH'].includes(method) ? 'data' : 'params'
      return request({
        method,
        url,
        // [keyName]: method === 'POST' ? qs.stringify(dataOrParams) : dataOrParams,
        [keyName]: dataOrParams,
        ...Object.assign(config || {}, instanceConf)
      })
    }
  })
  return requestMap
}

export default injectRequest(apiMap)
