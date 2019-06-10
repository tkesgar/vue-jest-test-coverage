import { mount } from '@vue/test-utils'
import Component from '@/components/TestComponent'

test('should print foo', () => {
  const wrapper = mount(Component, {
    propsData: {
      cond: true
    }
  })

  expect(wrapper.contains('.foo')).toBeTruthy()
})
