import Vue from 'vue'
import * as requests from '@/plugins/request/index'
Vue.prototype.$request = requests.request
Vue.prototype.$intactRequest = requests.intactRequest

import API from "@/api/index";
Vue.prototype.$api = API
