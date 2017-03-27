import test from 'ava'
import uppercase from './Uppercase'

test('should transform all letter to uppercase', t => {
  const name = uppercase('marcos')

  t.is(name, 'MARCOS')
})
