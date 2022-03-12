import Vue from 'vue'
import App from './App.vue'
import store from './store'
import AxiosPlugin from 'vue-axios-cors';

import { library } from '@fortawesome/fontawesome-svg-core'

import {far,faStarHalfStroke} from '@fortawesome/free-regular-svg-icons'
import {fas,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas,faStarHalfStroke,far,faPaperPlane)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(AxiosPlugin)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
