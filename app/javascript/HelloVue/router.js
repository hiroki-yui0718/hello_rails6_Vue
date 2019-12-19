import Vue from 'vue'
import Router from 'vue-router'
import Home from './home.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/vue',
            name:'index',
            component: Home
        },
    ]

})