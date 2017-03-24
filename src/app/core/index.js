/* Components */
import Vue from 'vue'
import BlankComponent from './components/BlankComponent/BlankComponent'

Vue.component('blank-component', BlankComponent)

/* Filters */
import Capitalize from './filters/Capitalize/Capitalize'
import Uppercase from './filters/Uppercase/Uppercase'

Vue.filter('capitalize', Capitalize)
Vue.filter('uppercase', Uppercase)
