/* Components */
import Vue from 'vue'
import UiButton from './components/UiButton'

Vue.component('md-button', UiButton)

/* Filters */
import Capitalize from './filters/Capitalize'
import Uppercase from './filters/Uppercase'

Vue.filter('capitalize', Capitalize)
Vue.filter('uppercase', Uppercase)
