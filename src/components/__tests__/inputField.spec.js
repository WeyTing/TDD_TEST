//### 練習二：動態字數顯示
//
//需求：
//
//1. 使用者可輸入文字
//2. 即時顯示「你輸入了 N 個字」
import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import inputField from '../inputField.vue'

describe('練習二：動態字數顯示', () => {
  it('沒有輸入的時候，顯示「你輸入了0個字」', () => {
    const input = mount(inputField)
    expect(input.text()).toContain('你輸入了0個字')
  })
  it('使用者可以輸入文字', async () => {
    const input = mount(inputField)
    await input.find('input').setValue('我想打字')
    expect(input.text()).toContain('你輸入了4個字')
  })
})
