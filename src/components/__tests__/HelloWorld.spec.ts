// src/components/HelloWorld.spec.ts
import { mount, VueWrapper } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  let wrapper: VueWrapper
  let msg: string

  beforeAll(() => {
    msg = 'Hello Vue 3'
    wrapper = mount(HelloWorld, { props: { msg } })
  })

  it('should display header text', () => {
    expect(wrapper.find('h1').text()).toEqual(msg)
  })

  it('should display paragraph', () => {
    expect(wrapper.find('p').text()).toContain('written in typescript')
  })
})
