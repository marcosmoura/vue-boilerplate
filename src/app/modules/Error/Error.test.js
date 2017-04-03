import test from 'ava'
import Vue from 'vue'
import { mount } from 'avoriaz'
import { i18n, currentLang } from 'app/config'
import ErrorPage from './Error.vue'

const wrapper = mount(ErrorPage, { i18n })

test('should have the correct name', t => {
  t.is(wrapper.name(), 'error')
})

test('should have the correct title', t => {
  const pageTitle = wrapper.find('h1')[0]

  t.is(pageTitle.text(), currentLang.error.title)
})
