import to from "await-to-js";

export async function remoteOptions(promise) {
  let [err, ret] = await to(promise)
  if (err) {
    return []
  }
  return ret
}
