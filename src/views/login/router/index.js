import VueRouter from 'vue-router'
import LoginModule from '../components/LoginModule'
import RegistryModule from '../components/RegistryModule'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            component: LoginModule
        },
        {
            path: '/registry',
            component: RegistryModule
        }
    ]
})