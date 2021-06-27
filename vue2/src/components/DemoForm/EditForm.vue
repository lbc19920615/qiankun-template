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
import { computed } from '@vue/composition-api'
import { EditFormMixin, useFormCreate } from '@/components/DemoForm/EditFormMixin'

export const cusFormRule = [
  createFiled([
    'input',
    'name',
    'Name'
  ], [
    { required: true, message: '必填' },
  ]),
  createFiled([
    'interger-input',
    'age',
    '小于11数字'
  ], [
    { required: true, message: '必填' },
    {type: 'number', min:10, required: true, message:'最小为10的数字'}
  ]),
]

export default {
  name: 'EditForm',
  mixins: [
    EditFormMixin
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    let isEditForm = computed(() => {
      return props.type === EditType.edit
    })

    let formCreate = useFormCreate(props, isEditForm)

    return {
      ...formCreate,
      isEditForm
    }
  }
}
</script>
