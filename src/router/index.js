import Vue from 'vue'
import Router from 'vue-router'
// 注册插件
Vue.use(Router)

// import Films from '@/views/Films'
// import Center from '@/views/Center'
// import Cinema from '@/views/Cinema'
// import NowPlaying from '@/views/films/NowPlaying'
// import ComingSoon from '@/views/films/ComingSoon'
// import Detail from '@/views/Detail'

const routes = [
    {
        path: '/films',     // url 地址栏的路径
        component: () => import('@/views/Films'),   // 根据地址所映射的组件
        children: [
            {
                name: 'now',
                path: '/films/NowPlaying',
                component: () => import('@/views/films/NowPlaying')
            },
            {
                name: 'coming',
                path: 'ComingSoon',
                component: () => import('@/views/films/ComingSoon')
            },
            {
                path: '',
                redirect: 'NowPlaying'
            }
        ]
    },
    {
        path: '/center',
        component: () => import('@/views/Center'),
        // component: resolve => require(['@/views/Center'], resolve),
        // beforeEnter(to, from, next){
        //     console.log('进入center之前')
        //     next()
        // }
    },
    {
        path: '/cinema',
        component: () => import('@/views/Cinema')
    },
    {
        path: '/login',
        component: () => import('@/views/Login')
    },
    {
        path: '/cinema/search',
        component: () => import('@/views/cinema/Search')
    },
    {
        path: '/detail/:id',
        component: () => import('@/views/Detail'),
        props: true
    },
    
    {
        path: '/',
        redirect: '/films'
    },
    {
        path: '*',      // 所有都不匹配的情况下，重新定向到一个地址
        redirect: ''
    }
]

// 创建Router路由器实例对象
const router = new Router({
    mode: 'hash',
    routes
})

// 全局的路由守卫
// beforeEach 和 afterEach
// 全局的前置路由守卫，在路由跳转之前执行
// 在进入到 Center 之前，需要判断本地存储里是否有 token 。
// 如果有，就代表用户登陆了，直接放行；否则直接跳转到登陆页面
// router.beforeEach((to, from, next) => {
//     // from 当前导航要离开的路由对象
//     // to 当前导航要进入的路由对象
//     if(to.path === '/center'){
//         if(localStorage.getItem('token')){
//             next()      // 让程序继续执行
//         }else{
//             next('/login')
//         }
//     }else{
//         next()
//     }
// })

// 全局的后置路由守卫  路由跳转之后
// router.afterEach((to, from) => {
//     if(to.path === '/center'){
//         console.log('已进入个人中心')
//     }
// })



// 向外暴露
export default router