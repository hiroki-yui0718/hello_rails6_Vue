import Vue from 'vue'
import Router from 'vue-router'
import Position from '../component/position.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home/step3',
      name:'position',
      component: Position
    },
  ]
})