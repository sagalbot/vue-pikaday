import './pikaday.scss'
import Vue from 'vue'
import vPikaday from './vue-pikaday'

Vue.use(vPikaday)

new Vue({
  el: 'body',
  data: {
    date: null
  }
})
