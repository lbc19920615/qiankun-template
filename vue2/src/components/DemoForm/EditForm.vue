<style lang="scss">
$tag: "edit-form";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <div class="edit-form">
    <form-create
      v-model="fApi"
      :rule="rule"
      :value.sync="value"
      :option="option"
    >
    </form-create>
  </div>
</template>

<script>
import { EditType } from '@/utils/enums'
import { createFiled } from '@/utils/form'

export const cusFormRule = [
  createFiled([
    'interger-input',
    'cus-field1',
    '小于11数字'
  ], [
    { required: true, message: '必填' },
    {type: 'number', min:10, required: true, message:'最小为10的数字'}
  ])
]

export default {
  name: 'EditForm',
  props: {
    type: {
      type: Object,
      default() {
        return EditType.edit
      }
    }
  },
  computed: {
    isEditForm() {
      return this.type === EditType.edit
    }
  },
  mounted () {
    console.log(this.isEditForm)
  },
  data () {
    return {
      // 实例对象
      fApi: {},
      option:{
      },
      // 表单数据
      value: {},
      // 表单生成规则
      rule: [
        ...cusFormRule
      ]
    }
  }
}
</script>
