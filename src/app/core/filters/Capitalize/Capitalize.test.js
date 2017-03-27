import test from 'ava'
import capitalize from './Capitalize'

test('should capitalize single word', t => {
  const name = capitalize('marcos')

  t.is(name, 'Marcos')
})

test('should capitalize all words', t => {
  const name = capitalize('marcos moura')

  t.is(name, 'Marcos Moura')
})
