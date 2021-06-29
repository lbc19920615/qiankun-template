
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/comps',
    name: 'Comps',
    component: () => import(/* webpackChunkName: "about" */ '../views/Comps.vue')
  },
]
export default routes
