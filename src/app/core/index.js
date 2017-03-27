/* Components */
import Vue from 'vue'
import BlankComponent from './components/BlankComponent/BlankComponent'

/* Filters */
import Capitalize from './filters/Capitalize/Capitalize'
import Uppercase from './filters/Uppercase/Uppercase'

Vue.component('blank-component', BlankComponent)

Vue.filter('capitalize', Capitalize)
Vue.filter('uppercase', Uppercase)
