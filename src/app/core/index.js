/* Components */
import Vue from 'vue'
import BlankComponent from './components/BlankComponent'

Vue.component('blank-component', BlankComponent)

/* Filters */
import Capitalize from './filters/Capitalize'
import Uppercase from './filters/Uppercase'

Vue.filter('capitalize', Capitalize)
Vue.filter('uppercase', Uppercase)
