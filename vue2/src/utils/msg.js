import { Message } from 'element-ui'

/**
 * showTip
 * @param {string} msg
 */
export function showTip(msg = '') {
  Message({
    message: msg,
    type: 'error',
    duration: 5 * 1000
  })
}
