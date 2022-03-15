import Vue from 'vue'
import Question from './Question.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(MavonEditor)

axios.defaults.withCredentials=true

new Vue({
  render: h => h(Question),
  router: router
}).$mount('#question')