import Mock from 'mockjs'

// eslint-disable-next-line no-unused-vars
Mock.mock('/api/basic-table', (req, res) => { // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  const list = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]

  return {
    tableData: list
  }
})

Mock.mock('/api/options-1', () => {
  const options = [
    {
      title: '案件编号',
      roleData: 'caseNo', // 当前表头对应的来自父组件数据源的字段
      width: '300'
    },
    {
      title: '通知书编号',
      roleData: 'notificationNumber',
      width: '300'
    },
    {
      title: '当事人',
      roleData: 'litigantOrgName'
    },

    {
      title: '罚款金额',
      roleData: 'amountMoney'
    },
    {
      title: '案发日期',
      roleData: 'occurredTime',
      width: '230'
    },
    {
      title: '立案日期',
      roleData: 'registerDate',
      width: '200'
    },
    {
      title: '案发地点',
      roleData: 'address'
    },
    {
      title: '执法部门',
      roleData: 'lawEnforcementDeptName'
    },
    {
      title: '创建人',
      roleData: 'createUserName'
    },
    {
      title: '状态',
      roleData: 'caseStatus'
    }
  ]
  return {
    data: options
  }
})
