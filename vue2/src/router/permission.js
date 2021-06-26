import { router } from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { request } from '@/plugins/request'

NProgress.configure({ showSpinner: false })

// 路由全局前置守卫
router.beforeEach(async (to, from, next) => {
  // 路由变化时取消当前所有非全局的pending状态的请求
  request.clearPendingPool()
  NProgress.start()

  const hasRouter = store.getters.routes && store.getters.routes.length > 0

  if (hasRouter) {
    next()
  } else {
    // get user info
    const roles = await store.state.permission.roles
    console.log('generateRoutes', roles)
    const accessRoutes = await store.dispatch(
      'permission/generateRoutes',
      roles
    )
    router.addRoutes(accessRoutes)
    next({ ...to, replace: true })
  }
})


router.afterEach(() => {
  NProgress.done()
})

/**
 *
 * @param roles
 */
export function setRoles(roles = []) {
  store.commit('permission/SET_ROLES', roles)
}

