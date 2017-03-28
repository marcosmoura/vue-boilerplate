/* Components */
import Vue from 'vue'
import SayHello from './components/SayHello/SayHello'

/* Filters */
import Capitalize from './filters/Capitalize/Capitalize'
import Uppercase from './filters/Uppercase/Uppercase'

Vue.component('say-hello', SayHello)

Vue.filter('capitalize', Capitalize)
Vue.filter('uppercase', Uppercase)
