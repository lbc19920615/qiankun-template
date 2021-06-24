import Vue from 'vue'
import mitt from 'mitt'

let emitter = mitt()
Vue.prototype.$eventbus = emitter

