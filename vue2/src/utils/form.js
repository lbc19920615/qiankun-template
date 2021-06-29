/**
 * form helper
 * @author lbc
 */

import { maker } from '@form-create/element-ui'
import * as _validateUtils from '@/components/ComUtils/validate'

/**
 * createFiled
 * @param obj {[]}
 * @param rules {[]}
 * @returns {*}
 */
export function createFiled(obj = [], rules = []) {
  return maker
    .create.apply(null, obj)
    .validate(
      rules
    )
}

/**
 * validateUtils
 * @type {{create(type: string, ...args): any}}
 */
export let validateUtils = _validateUtils
