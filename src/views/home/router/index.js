import VueRouter from 'vue-router'
import MyHome from '../components/MyHome'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'myHome'
        },
        {
            path: '/myHome',
            component: MyHome
        }
    ]
})