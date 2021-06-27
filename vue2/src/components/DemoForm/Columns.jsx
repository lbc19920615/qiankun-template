import DemoAction from '@/components/DemoForm/DemoAction'

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
