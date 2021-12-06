import VueRouter from 'vue-router'
import WriteArticle from '../components/WriteArticle'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'writeArticle'
        },
        {
            path: '/writeArticle',
            component: WriteArticle
        }
    ]
})