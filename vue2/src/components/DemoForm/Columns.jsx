import { computed, ref } from '@vue/composition-api'
import DemoAction from '@/components/DemoForm/DemoAction'
import { EditType } from '@/utils/enums'

export let columns = (ctx, listeners) => {
  return  [
    { label: '日期', prop: 'name' },
    {
      label: '地址',
      prop: 'id',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (h, scope) => {
        return (
          <el-tag>{scope.row.name}</el-tag>
        )
      }
    },
    {
      label: '操作',
      prop: '',
      component: DemoAction,
      listeners
    },
  ]
}

export let useDialog = () => {

  let renderDialogVisible = ref(false)
  let renderDialogType = ref(EditType.add)

  function isEdit() {
    return renderDialogType.value === EditType.edit
  }

  let renderDialogTitle = computed(() => {
    return isEdit() ? '编辑' : '添加'
  })

  let renderDialogModel = ref(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function renderDialog(h) {
    // console.log(renderDialogModel.value)
    if (isEdit()) {
      return (
        <edit-form append={renderDialogModel.value} type={EditType.edit}></edit-form>
      )
    } else {
      return (
        <edit-form append={renderDialogModel.value} type={EditType.add}></edit-form>
      )
    }
  }
  function toggleDialogVisible(v) {
    renderDialogVisible.value = v
  }
  function showEditDialog(model = {}) {
    // renderDialogTitle.value = '编辑'
    renderDialogModel.value = model
    renderDialogType.value = EditType.edit
    toggleDialogVisible(true)
  }
  function showAddDialog() {
    // renderDialogTitle.value = '添加'
    renderDialogModel.value = {}
    renderDialogType.value = EditType.add
    toggleDialogVisible(true)
  }
  return {
    renderDialogVisible,
    renderDialogTitle,
    renderDialog,
    toggleDialogVisible,
    showEditDialog,
    showAddDialog,
  }
}
