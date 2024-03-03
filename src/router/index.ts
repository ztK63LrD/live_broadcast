import { createRouter, createWebHistory } from "vue-router"
import 'reset.css'

const routes = [
    {
        path: '/', 
        redirect: '/index', // 重定向
    },
    {
        path: '/index',
        name: 'home',
        component: () => import('@/pages/home/index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/classify',
        name: 'classify',
        component: () => import('@/pages/classify/index.vue'),
        meta: {
            title: '分类'
        }
    },
    {
        path: '/charts',
        name: 'charts',
        component: () => import('@/pages/charts/index.vue'),
        meta: {
            title: '排行榜'
        }
    },
    {
        path: '/room',
        name: 'room',
        component: () => import('@/pages/room/index.vue'),
        meta: {
            title: '直播间'
        }
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('@/pages/notfound/index.vue'),
        meta: {
            title: '404界面'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'any',
        redirect: '/notfound',
    }
]

// createRouter用于创建路由器实例，可以管理多个路由
const router = createRouter({
    // 路由的模式的设置
    history: createWebHistory(),
    routes,
    linkActiveClass: 'selected'
})

export default router
