import VueRouter from 'vue-router'
import AvatarCutter from '../components/AvatarCutter'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'myHome'
        },
        {
            path: '/myHome',
            component: AvatarCutter
        }
    ]
})