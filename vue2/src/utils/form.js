import { maker } from '@form-create/element-ui'
import * as _validateUtils from '@/components/ComUtils/validate'

/**
 *
 * @param obj
 * @param rules
 * @returns {*}
 */
export function createFiled(obj = [], rules = []) {
  return maker
    .create.apply(null, obj)
    .props({

    })
    .validate(
      rules
    )
}

export let validateUtils = _validateUtils
