import { RouteConfig } from 'vue-router'

const router: RouteConfig = {
    path: '/',
    component: () => import('@/layouts/frontend.vue'),
    children: [
        {
            path: '',
            name: 'index',
            component: () => import('@/views/index.vue'),
        },
    ],
}

export default router
