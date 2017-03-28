import test from 'ava'
import SayHello from './SayHello.vue'

test('should have the correct name', t => {
  t.is(SayHello.name, 'blank-component')
})

test('should say hello', t => {
  t.is(SayHello.methods.sayHello(), 'Hello')
})
