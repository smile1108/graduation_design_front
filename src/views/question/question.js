import Vue from 'vue'
import Question from './Question.vue'
import VueRouter from 'vue-router'
import router from './router'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(MavonEditor)

axios.defaults.withCredentials=true

new Vue({
  render: h => h(Question),
  router: router
}).$mount('#question')