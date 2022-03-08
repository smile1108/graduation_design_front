import VueRouter from 'vue-router'
import ArticleMessage from '../components/ArticleMessage'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/:articleId',
            redirect: "/article/:articleId"
        },
        {
            path: '/article/:articleId',
            component: ArticleMessage
        }
    ]
})