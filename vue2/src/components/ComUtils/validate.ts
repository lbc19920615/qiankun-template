import merge from 'lodash/merge'

class ValidateRule {
  private options: any;
  // TODO type any
  constructor(options: any) {
    this.options = options
  }

  required(required = true, message = '必填项不能为空') {
    return merge({ required, message},  this.options)
  }
  integer(min = 0, max: number = Number.MAX_VALUE) {
    return merge({
      min,
      max,
      type: "integer",
    },  this.options)
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function create(type: string, ...args): any {
  let options = {}
  let callArgs = []
  if (args.length > 0) {
    options = args[args.length - 1]
    callArgs = args.slice(0, args.length - 1) as []
  }

  const rule = new ValidateRule(options)
  if (rule[type]) {
    // eslint-disable-next-line prefer-spread
    return rule[type].apply(rule, callArgs)
  } else {
    switch (type){
      default:
        throw new Error('参数错误');
    }
  }

  return null
}
