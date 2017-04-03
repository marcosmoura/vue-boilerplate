import test from 'ava'
import Vue from 'vue'
import { mount } from 'avoriaz'
import { i18n, currentLang } from 'app/config'
import Home from './Home.vue'

const wrapper = mount(Home, { i18n })

test('should have the correct name', t => {
  t.is(wrapper.name(), 'home')
})

test('should have the correct title', t => {
  const pageTitle = wrapper.find('h1')[0]

  t.is(pageTitle.text(), currentLang.home.title)
})
