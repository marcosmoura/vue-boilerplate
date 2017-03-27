import test from 'ava'
import BlankComponent from './BlankComponent.vue'

test('should have the correct name', t => {
  t.is(BlankComponent.name, 'blank-component')
})
