import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import store from './store'
import router from './router/index.js'
/*  全局样式  */
import './assets/css/global.css'
/*  导入字体图标  */
import './assets/icon/iconfont.css'
/*  导入axios  */
import axios from 'axios'
/* 挂载到vue的原型链中 方便每个子组件通过this访问  */
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://59.110.212.139:3001'
Vue.config.productionTip = false

new Vue({
  /* el:"#app", */
  store,
  router,
  render: h => h(App)
}).$mount('#app')
