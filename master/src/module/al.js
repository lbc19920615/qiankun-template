import JSON5 from 'json5'
export const alUtils = {
  alParseArr(arr, labelKey, valueKey) {
    return arr.map(v => {
      v.label = v[labelKey]
      v.value = v[valueKey]
    })
  },
  /**
   * alJsonStringify
   * @param obj
   */
  alJsonStringify(...args) {
    console.log(args)
    return JSON5.stringify.apply(null, args)
  },
  /**
   * alJsonParse
   * @param obj
   */
  alJsonParse(...args) {
    console.log(args)
    return JSON5.stringify.apply(null, args)
  }
}
