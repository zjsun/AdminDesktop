import Vue from "vue"
import Router from "vue-router"

import Home from "../views/Home.vue"

Vue.use(Router)

export default new Router({
    // linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/link2',
            name: 'Link2',
            component: Home,
            meta: {
                title: '链接2'
            }
        },
        {
            path: '/link21',
            name: 'Link21',
            component: Home,
            meta: {
                title: '链接21'
            }
        },
        {
            path: '/link22',
            name: 'Link22',
            component: Home,
            meta: {
                title: '链接22'
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
