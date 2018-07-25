import Vue from 'vue'
import App from './App.vue'
import {store} from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMale, faFemale, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bulma/css/bulma.css'

library.add(faMobileAlt)
library.add(faMale)
library.add(faFemale)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')