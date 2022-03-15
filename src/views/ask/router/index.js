import VueRouter from 'vue-router'
import WriteQuestion from '../components/WriteQuestion'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'writeQuestion'
        },
        {
            path: '/writeQuestion',
            component: WriteQuestion
        }
    ]
})