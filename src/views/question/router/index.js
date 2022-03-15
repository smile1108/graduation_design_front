import VueRouter from 'vue-router'
import QuestionMessage from '../components/QuestionMessage'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/:questionId',
            redirect: "/question/:questionId"
        },
        {
            path: '/question/:questionId',
            component: QuestionMessage
        }
    ]
})