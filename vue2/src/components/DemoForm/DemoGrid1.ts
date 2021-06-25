import { maker } from '@form-create/element-ui'

export const cusFormRule = [
  maker.create('interger-input','field1','cus只能输入数字')
  ,maker.input('sds', 'field2')
  ,maker.select('field','selectId',1)
    .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ,maker.datePicker('field','date1','2018-12-16')
]
