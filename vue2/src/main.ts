import './public-path'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: any;
  }
}

import './plugins/element.js'
import './plugins/views'

import formCreate from '@form-create/element-ui'

Vue.config.productionTip = false
Vue.use(formCreate)

type appVuePrototype = [{name: string, value: any}]
function bootstrapAppProptotype(prototype?: appVuePrototype) {
  if (prototype) {
    prototype.forEach(prototypeItem => {
      Vue.prototype[prototypeItem.name] = prototypeItem.value
    })
  }
}

let router: any
let instance: any
function render (renderProps: {container: any, prototype?: appVuePrototype} = { container: null}) {
  const { container, prototype } = renderProps
  if (container) {
    bootstrapAppProptotype(prototype)
    router = new VueRouter({
      base: window.__POWERED_BY_QIANKUN__ ? '/vue2/' : '/',
      mode: 'history',
      routes
    })
    Vue.use(VueRouter)
    instance = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app')
  }
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function bootstrap () {
  console.log('[vue2] vue app bootstraped')
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function mount (renderProps) {
  console.log('[vue2] props from main framework', renderProps)
  render(renderProps)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
