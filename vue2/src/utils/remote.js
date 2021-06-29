import to from "await-to-js";

/**
 * 处理select remote
 * @param promise {Promise<unknown>}
 * @returns {Promise<unknown>}
 */
export async function remoteOptions(promise) {
  let [err, res] = await to(promise)
  if (err) {
    return []
  }
  return Array.isArray(res.data) ? res.data : []
}
