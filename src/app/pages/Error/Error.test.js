import test from 'ava'
import ErrorPage from './Error.vue'

test('should have the correct name', t => {
  t.is(ErrorPage.name, 'error')
})
