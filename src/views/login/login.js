import Vue from 'vue'
import Login from './Login.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(Login),
  router: router
}).$mount('#login')