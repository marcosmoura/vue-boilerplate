import test from 'ava'
import Home from './Home.vue'

test('should have the correct name', t => {
  t.is(Home.name, 'home')
})
