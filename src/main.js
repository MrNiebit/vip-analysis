import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import VueRouter from 'vue-router'
// 当使用export default 导出的模块时， 导入的时候就不需要花括号，否则都需加上  花括号。
import { Routes } from './route/routes'

import { VueJsonp } from 'vue-jsonp'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
    // // 因为引入了vue-jsonp，所以可以直接使用this.$jsonp, Vue.use(VueJsonp）方法里把$jsonp赋给vue原型了：Vue.prototype.$jsonp = jsonp
Vue.use(VueJsonp)
    /**
     * 如果不加base了话，使用history模式，打包后，会出现空白页面的情况
     * 所以这里要加上base
     */
const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    base: '/vip-analysis'
})
window.Hls = require('hls.js')

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')