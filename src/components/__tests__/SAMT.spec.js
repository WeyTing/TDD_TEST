//### 練習三：**簡單加減器**
//
//有兩個按鈕 `+` `-`，中間顯示數字。
//
//需求：
//
//1. 中間的預設數字 `0`
//2. 按 `+` 按鈕數字加 `1`，`-` 按鈕數字減 `1`
//3. 數字不能是負的
import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import SAMT from '../SAMT.vue'

describe('練習三：簡單加減器', () => {
  it('中間預設為0', async () => {
    const wrapper = mount(SAMT)
    await wrapper.find('span[id=count]')
    expect(wrapper.find('span[id=count]').text()).toEqual('0')
  })
  it('按+按鈕數字加1 按-按鈕數字減1', async () => {
    const wrapper = mount(SAMT)
    await wrapper.find('[data-testid=add]').trigger('click')
    await wrapper.find('[data-testid=add]').trigger('click')
    await wrapper.find('[data-testid=add]').trigger('click')
    expect(wrapper.find('span[id=count]').text()).toEqual('3')
    await wrapper.find('button[id=minus]').trigger('click')
    expect(wrapper.find('span[id=count]').text()).toEqual('2')
  })
  it('數字不能是負的', async () => {
    const wrapper = mount(SAMT)
    expect(wrapper.find('span[id=count]').text()).toEqual('0')
    await wrapper.find('button[id=minus]').trigger('click')
    await wrapper.find('button[id=minus]').trigger('click')
    await wrapper.find('button[id=minus]').trigger('click')
    await wrapper.find('button[id=minus]').trigger('click')
    expect(wrapper.find('span[id=count]').text()).toEqual('0')
  })
})
