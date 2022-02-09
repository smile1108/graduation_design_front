import VueRouter from 'vue-router'
import MyContent from '../components/MyContent'
import MyProblem from '../components/MyProblem'
import TodoListMain from '../components/TodoListMain'

let router = new VueRouter({
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
// 挂载路由导航守卫
// to表示将要访问的路径，from表示从哪里来，next表示下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
    // 若访问登录页，则放行
    if (to.path === '/home') return next()
    if (to.path === '/problem') return next()
    // 获取存在sessionStorage中的 过期时间 来判断用户cookie是否过期
    const expireTimestamp = window.sessionStorage.getItem('expireTimestamp')
    // 然后和现在的时间戳比较 看看是否过期
    const nowTimestamp = new Date().getTime()
    if(nowTimestamp > expireTimestamp) {
        // 表示cookie过期 这时候应该强制跳转到/home
        alert('cookie过期, 请登录之后再查看用户待办事项')
        return next('/home')
    }
    next()
})

// 创建并暴露一个路由器
export default router