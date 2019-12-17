import Vue from 'vue'
import Router from 'vue-router'
import Home from './home.vue'
import BookSearch from './bookSearch.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:"/recorder",
            name:'home',
            component: Home,
        },
        {
            path:"/recorder/search",
            name:"search",
            component: BookSearch
        },
        {   path:"*",
            redirect:'/recorder'

        }
    ]
})