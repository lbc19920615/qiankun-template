import { maker } from '@form-create/element-ui'
import * as validateUtils from '@/components/ComUtils/validate'
import './formCreate1'

export const cusFormRule = [
  maker.create('interger-input','cus-field1','cus只能输入数字')
    .validate([
      validateUtils.create('required', true),
      validateUtils.create('integer', 1, 11, {
        message: "必须小于11"
      }),
    ])
]

export const basicFormRule = [
  {
    type: 'el-row',
    props: {
      type: 'flex'
    },
    children: [
      {
        type: 'el-col',
        props: {
          span: 12,
        },
        children: [
          {
            type: 'input',
            field: 'goods_name',
            title: '商品名称'
          },
        ]
      },
      {
        type: 'el-col',
        props: {
          span: 12,
        },
        children: [
          {
            type: 'datePicker',
            field: 'created_at',
            title: '创建时间'
          },
        ]
      }
    ]
  },
  {
    type:'inputBtn',
    field:'btn',
    title:'自定义表单组件',
    value:10
  },
]

export const configFormRule = [
  {
    type:'datePicker',
    field:'date',
    title:'日期+时间',
    props:{
      type:'datetime'
    },
  },
  {
    type:'input',
    field:'input',
    title:'被禁用',
    value:'disabled',
    props:{
      disabled: true
    },
  }
]

export const formArrayRule = [
  {
    type:'group',
    field:'group',
    title:'group',
    value:[{field1:'aaa',field2:'sss'}, {field1:'aaa',field2:'sss'}],
    props:{
      rules: [
        {
          type:'input', field:'field1',title:'field1',
          validate: [{type: 'string', required: true, message:'必填项不能为空'}]
        },
        {
          type:'input', field:'field2',title:'field2',
          validate: [{type: 'string', required: true, message:'必填项不能为空'}]
        },
      ]
    }
  },
]


export const formValidateRule = [
  {
    type:'input',
    field:'valid_name',
    title:'名称',
    validate: [{type: 'string', required: true, message:'必填项不能为空'}]
  },
  {
    type:'input',
    field:'valid_phone',
    title:'手机号',
    validate: [
      { type: 'string', required: true, message:'必填项不能为空' },
      { type: 'string', pattern: /^1[0-9]{10}$|^[569][0-9]{7}$/, message: '请填写正确的手机号码' }
    ]
  },
  {
    type:'datePicker',
    field:'dateRange',
    title:'日期区间',
    value: '',
    props:{
      type:'datetimerange'
    },
    validate: [{type: 'array', fields:{
        0:{type: 'date', required: true, message:'请选择日期'},
        1:{type: 'date', required: true, message:'请选择日期'}
      },required: true, message:'请选择日期区间'}]
  },
  {
    type:'checkbox',
    field:'checkbox_label',
    title:'标签',
    value: [],
    options:[
      {label:'好用',value:0},
      {label:'快速',value:1},
      {label:'高效',value:2},
      {label:'全能',value:3},
    ],
    validate: [{type: 'array', min:3, required: true, message:'最少选择3个'}]
  }
]
