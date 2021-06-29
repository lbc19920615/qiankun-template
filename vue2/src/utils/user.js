/**
 * setUserToken
 * @param token { string }
 */
export function setUserToken(token) {
  localStorage.setItem('token', token)
}

/**
 * getUserToken
 * @returns {string}
 */
export function getUserToken() {
  return localStorage.getItem('token')
}

/**
 * delUserToken
 */
export function delUserToken() {
  localStorage.removeItem('token')
}
