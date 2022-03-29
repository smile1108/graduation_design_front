import VueRouter from 'vue-router'
import ChatArea from '../components/ChatArea'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/:toUser',
            redirect: '/chat/:toUser'
        },
        {
            path: '/chat/:toUser',
            component: ChatArea
        }
    ]
})