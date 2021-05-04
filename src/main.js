import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import VueRouter from 'vue-router'
// 当使用export default 导出的模块时， 导入的时候就不需要花括号，否则都需加上  花括号。
import {Routes} from './route/routes'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})
window.Hls = require('hls.js')

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
