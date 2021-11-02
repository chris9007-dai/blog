import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../view/main.vue'
import creep from '../view/creep.vue'
import down from '../view/down.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: main },
    { path: '/creep',component: creep},
    { path: '/down',component: down}
  ]
})

export default router
