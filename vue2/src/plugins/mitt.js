import Vue from 'vue'
import mitt from 'mitt'

export let emitter = mitt()
Vue.prototype.$eventbus = emitter



