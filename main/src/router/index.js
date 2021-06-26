import { createRouter, createWebHistory } from 'vue-router'
import 'nprogress/nprogress.css' // progress bar style

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const createCustomRouter = () => {
  return createRouter({
    // mode: 'history', // require service support
    history: createWebHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  })
}

const router = createCustomRouter()

export function resetRouter () {
  const newRouter = createCustomRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
