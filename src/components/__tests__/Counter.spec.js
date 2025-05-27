import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CounterBtn from '../CounterBtn.vue'

describe('計數器按鈕', () => {
  it('有一顆按鈕，他的初始值為1', () => {
    const btn = mount(CounterBtn)
    expect(btn.text()).toEqual('1')
  })
  it('按一下按鈕，數字會加1', async () => {
    const btn = mount(CounterBtn)
    await btn.trigger('click')
    expect(btn.text()).toEqual('3')
  })
  it('可以透過 prop 設定初始值', () => {
    const btn = mount(CounterBtn, {
      props: {
        initCount: 80,
      },
    })
    expect(btn.text()).toEqual('80')
  })
})
