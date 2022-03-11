import VueRouter from 'vue-router'
import MyArticle from '../components/MyArticle'
import MyLike from '../components/MyLike'
import MyMessage from '../components/MyMessage'
import MyFollow from '../components/MyFollow'
import MyComment from '../components/MyComment'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/:username',
            redirect: "/myArticle/:username"
        },
        {
            path: '/myArticle/:username',
            component: MyArticle
        },
        {
            path: '/myLike/:username',
            component: MyLike
        },
        {
            path: '/myFollow/:username',
            component: MyFollow
        },
        {
            path: '/myMessage/:username',
            component: MyMessage
        },
        {
            path: '/myComment/:username',
            component: MyComment
        }
    ]
})