export let columns = [
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
]
