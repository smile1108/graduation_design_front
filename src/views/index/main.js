import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)

axios.defaults.withCredentials=true

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
