import './public-path'
import Vue from 'vue'
import App from './App.vue'
import { router, onUnmount } from './router/index'
import store from './store'
import * as permission from '@/router/permission.js'

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: any;
  }
}

import './plugins/composition'
import './plugins/mitt'
import './plugins/formCreate'
import './plugins/element.js'
import './plugins/views'
import './plugins/cusform'
import './plugins/freeTable'
import './plugins/highlight'

Vue.config.productionTip = false

type appVuePrototype = [{name: string, value: any}]
function bootstrapAppProptotype(prototype?: appVuePrototype) {
  if (prototype) {
    prototype.forEach(p => {
      Vue.prototype[p.name] = p.value
    })
  }
}

let instance: any
function render (renderProps: {container: any, prototype?: appVuePrototype} = { container: null}) {
  const { container } = renderProps
  if (container) {
    instance = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app')
    // 解决微应用vue devtools挂载失败问题
    if (process.env.NODE_ENV === 'development') {
      // vue-devtools  加入此处代码即可
      const instanceDiv = document.createElement('div') as any
      instanceDiv.__vue__ = instance
      document.body.appendChild(instanceDiv)
    }
  }
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue2] vue app bootstraped')
}

export async function mount (renderProps) {
  console.log('[vue2] props from main framework', renderProps)
  const { prototype } = renderProps
  bootstrapAppProptotype(prototype)
  permission.setRoles(['admin'])
  render(renderProps)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  onUnmount()
}

