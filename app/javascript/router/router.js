import Vue from 'vue'
import Router from 'vue-router'
import Position from '../component/position.vue'
import Slide from '../component/slide.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home/step3',
      name:'position',
      components:{ 
        default: Position,
        slide: Slide
      }
    },
  ]
})