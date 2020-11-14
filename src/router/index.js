import Vue from 'vue'
import Router from 'vue-router'
import Login from './../views/Login'
import Home from './../views/Home'
import NotFound from './../views/error/404.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
        , {
            path: '/404',
            name: 'notFound',
            component: NotFound
        }
    ]
})