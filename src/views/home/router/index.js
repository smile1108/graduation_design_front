import VueRouter from 'vue-router'
import MyArticle from '../components/MyArticle'
import MyLike from '../components/MyLike'
import MyMessage from '../components/MyMessage'
import MyFollow from '../components/MyFollow'

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
            path: '/myLike',
            component: MyLike
        },
        {
            path: '/myFollow',
            component: MyFollow
        },
        {
            path: '/myMessage',
            component: MyMessage
        }
    ]
})