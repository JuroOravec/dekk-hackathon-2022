import { mount } from '@vue/test-utils'
import App from '../App.vue'

// For more examples, see
// https://github.com/vitest-dev/vitest/tree/f3524602ccc678badaae6bc5c3945008d8cfd82a/examples/vue
test('mount component', async () => {
  expect(App).toBeTruthy()

  const wrapper = mount(App, {
    props: {
      count: 4,
    },
  })

  expect(wrapper.text()).toContain('4 x 2 = 8')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 3 = 12')

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 4 = 16')
})