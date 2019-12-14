// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery3
//= require popper
//= require bootstrap-sprockets

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

require("trix")
require("@rails/actiontext")

import Vue from 'vue'
import router from './router'
import Step1 from '../step1.vue'
import Step2 from '../step2.vue'
import Step3 from '../step3.vue'
import Step4 from '../step4.vue'
import Step5 from '../step5.vue'
import Clear from '../component/keyclear.vue'
import Position from '../component/position.vue'
import Increment from '../component/increment.vue'

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: '#step1',
    render: h => h(Step1)
  })
  new Vue({
    render: h => h(Step2)
  }).$mount('#step2')

  new Vue({
    router,
    el: '#step3',
    render: h => h(Step3)
  })
  new Vue({
    el: '#step4',
    render: h => h(Step4)
  })
  new Vue({
    el: '#step5',
    render: h => h(Step5)
  })
  new Vue({
    el: '#clear',
    render: h => h(Clear)
  })
  new Vue({
    el:'#position',
    render: h => h(Position)
  })
  new Vue({
     el:'#increment',
     render: h => h(Increment)
   })
})