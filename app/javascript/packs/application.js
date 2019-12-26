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
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import './firebase'
import { CoolSelect } from 'vue-cool-select'
import 'vue-cool-select/dist/themes/bootstrap.css'
import 'vue-cool-select/dist/themes/material-design.css'
import 'animate.css/animate.min.css'
import router1 from '../router/router'
import store1  from '../store/store'
import Step1 from '../step1.vue'
import Step2 from '../step2.vue'
import Step3 from '../step3.vue'
import Step4 from '../step4.vue'
import Step5 from '../step5.vue'
import Step6 from '../step6.vue'
import Step7 from '../step7.vue'
import Clear from '../component/keyclear.vue'
import Position from '../component/position.vue'
import Increment from '../component/increment.vue'
import Carousel from '../component/carousel.vue'
import Calendar from '../component/calendar.vue'
import Books from '../vuex-books/app.vue'
import store2  from '../vuex-books/store'
import Time  from '../vuex-module/app.vue'
import store3  from '../vuex-module/store'
import Read from '../reading-recorder/app'
import store4 from '../reading-recorder/store'
import router2 from '../reading-recorder/router'
import HelloVue from '../HelloVue/app.vue'
import router3 from '../HelloVue/router'
import store5 from '../HelloVue/store'
import SkyWay from '../skyWay/home.vue'

Vue.use(CoolSelect)
Vue.use(ElementUI, {locale})
Vue.prototype.$http = (url, opts) => fetch(url, opts)

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    render: h => h(Step1)
  }).$mount('#step1')

  new Vue({
    render: h => h(Step2)
  }).$mount('#step2')

  new Vue({
    router:router1,
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
    el: '#step6',
    render: h => h(Step6)
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
   new Vue({
    el:'#carousel',
    render: h => h(Carousel)
  })
  new Vue({
    store:store1,
    el:'#step7',
    render: h => h(Step7)
  })
  new Vue({
    store:store2,
    el:'#books',
    render: h => h(Books)
  })
  new Vue({
    store:store3,
    el:'#times',
    render: h => h(Time)
  })
  new Vue({
    router:router2,
    store:store4,
    el:'#read',
    render: h => h(Read)
  })
  new Vue({
    el:'#calendar',
    render: h => h(Calendar)
  })
  new Vue({
    router:router3,
    store:store5,
    el:'#helloVue',
    render: h => h(HelloVue)
  })
  new Vue({
    el:'#skyWay',
    render: h => h(SkyWay)
  }
  )
})