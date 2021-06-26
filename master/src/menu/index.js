const menu = [
  {
    title: '子系统分类一',
    appPath: 'app1',
    entry: '//localhost:8081',
    child: [
      {
        path: '/page1',
        title: '子系统菜单一'
      },
      {
        path: '/page2/index',
        title: '子系统菜单二'
      },
      {
        path: '/page3parent/page3',
        title: '子系统菜单三'
      }
    ]
  }
]

export default menu
