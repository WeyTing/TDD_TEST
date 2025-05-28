import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import App from '../../App.vue'

describe('app', () => {
  it('畫面上有一組簡單的加減器', async () => {
    const wrapper = mount(App)
    const Btn = wrapper.findAll('button')[0]
    expect(Btn.text()).toContain('+')

    await Btn.trigger('click')
    await Btn.trigger('click')
    expect(wrapper.find('span[id=count]').text()).toEqual('2')
  })
})
