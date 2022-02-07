import Vue from 'vue'
import Login from './Login.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)

axios.defaults.withCredentials=true

new Vue({
  render: h => h(Login),
  router: router
}).$mount('#login')