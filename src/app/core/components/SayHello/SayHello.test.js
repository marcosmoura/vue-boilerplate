import test from 'ava'
import Vue from 'vue'
import { mount } from 'avoriaz'
import { i18n, currentLang } from 'app/config'
import SayHello from './SayHello.vue'

const wrapper = mount(SayHello, { i18n })

test('should have the correct name', t => {
  t.is(wrapper.name(), 'say-hello')
})

test('should have render hello message', t => {
  const pageTitle = wrapper.find('h1')[0]

  t.is(pageTitle.text(), currentLang.hello)
})

test('should say hello', t => {
  t.is(wrapper.vm.sayHello(), currentLang.hello)
})
