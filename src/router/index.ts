import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import frontend from './frontend'

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [frontend],
})

export default router
