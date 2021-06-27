import { EditType } from '@/utils/enums'
import { onMounted, onUnmounted, ref } from '@vue/composition-api'
import { cusFormRule } from '@/components/DemoForm/EditForm'

export let EditFormMixin = {
  props: {
    type: {
      type: Object,
      default() {
        return EditType.edit
      }
    },
    append: null
  }
}

export function useFormCreate(props, isEditForm) {
  let option = ref({})
  let fApi = ref({})
  let value = ref({})
  let rule = ref([
    ...cusFormRule
  ])

  onMounted(() => {
    fApi.value.setValue(props.append)
    fApi.value.nextTick(() => {
      if (!isEditForm) {
        fApi.value.clearValidateState()
      }
    })
  })

  onUnmounted(() => {
    console.log('beforeDestroy', )
    fApi.value.resetFields()
  })

  return {
    fApi,
    option,
    rule,
    value
  }
}
