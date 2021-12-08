import Vue from 'vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(Home),
  router: router
}).$mount('#home')