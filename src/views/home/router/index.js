import VueRouter from 'vue-router'
import MyArticle from '../components/MyArticle'
import MyLike from '../components/MyLike'
import MyMessage from '../components/MyMessage'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'myArticle'
        },
        {
            path: '/myArticle',
            component: MyArticle
        },
        {
            path: '/MyLike',
            component: MyLike
        },
        {
            path: '/MyMessage',
            component: MyMessage
        }
    ]
})