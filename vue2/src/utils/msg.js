import { Message } from 'element-ui'

/**
 * showTip
 * @param msg {string}
 * @param duration {number}
 * @param option {{}}
 */
export function showTip(msg = '', duration = 5 * 1000, option = {}) {
  Message({
    message: msg,
    type: 'error',
    duration,
    ...option
  })
}
