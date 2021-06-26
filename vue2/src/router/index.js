import VueRouter from 'vue-router'
import routes from './routes'
import Vue from 'vue'

export const routers = routes

Vue.use(VueRouter)

const createRouter = () =>
  new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app1/' : '/',
    mode: 'history',
    routes: []
  })

export let router = createRouter()

export function onUnmount() {
  router = null
}
