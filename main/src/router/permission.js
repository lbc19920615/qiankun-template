import NProgress from 'nprogress'
import { getToken } from '@/utils/auth'
import store from '@/store'
import router from '@/router/index'


const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

function redirectToLogin (next, to) {
  next(`/login?redirect=${to.path}`)
}

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // eslint-disable-next-line no-unused-vars
          const { roles } = await store.dispatch('user/getInfo')
          // generate accessible routes map based on roles
          // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // // dynamically add accessible routes
          // for (const item of accessRoutes) {
          //   router.addRoute(item)
          // }
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          console.log(error)
          // remove token and go to login page to re-login
          // await store.dispatch('user/resetToken')
          // ElMessage.error(error || 'Has Error')
          // redirectToLogin(next, to)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token */

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      redirectToLogin(next, to)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
