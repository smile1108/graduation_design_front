import VueRouter from 'vue-router'
import MyContent from '../components/MyContent'
import MyProblem from '../components/MyProblem'
import TodoListMain from '../components/TodoListMain'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component: MyContent
        },
        {
            path: '/problem',
            component: MyProblem
        },
        {
            path: '/todoList',
            component: TodoListMain
        }
    ]
})