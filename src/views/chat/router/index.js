import VueRouter from 'vue-router'
import ChatBox from '../components/ChatBox'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/:toUser',
            redirect: '/chat/:toUser'
        },
        {
            path: '/chat/:toUser',
            component: ChatBox
        }
    ]
})