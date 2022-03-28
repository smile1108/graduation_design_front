import Vue from 'vue'
import Chat from './Chat.vue'
import VueRouter from 'vue-router'
import router from './router'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)

axios.defaults.withCredentials=true

new Vue({
  render: h => h(Chat),
  router: router
}).$mount('#chat')