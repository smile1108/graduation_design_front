import Vue from 'vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'; // 2.1引入结构
import 'element-ui/lib/theme-chalk/index.css'; // 2.2引入样式
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

axios.defaults.withCredentials=true

new Vue({
  render: h => h(Home),
  router: router
}).$mount('#home')