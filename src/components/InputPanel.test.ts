import { mount } from '@vue/test-utils'
import InputPanel from './InputPanel.vue'

describe('InputPanel', () => {
  it('cash input displays 0 when allocations sum to 100', async () => {
    const wrapper = mount(InputPanel)
    // Default: canadianStocks=30, usStocks=40, internationalStocks=30, bonds=0 → total=100 → cash=0
    const cashInput = wrapper.find('#cash-input')
    expect((cashInput.element as HTMLInputElement).value).toBe('0')
  })

  it('emits change with correct canadianStocks value when percent input changes', async () => {
    const wrapper = mount(InputPanel)
    const canadianInput = wrapper.find('#canadian-stocks-input')
    await canadianInput.setValue(50)
    const emitted = wrapper.emitted('change')
    expect(emitted).toBeTruthy()
    const lastPayload = (emitted as unknown[][])[emitted!.length - 1][0] as {
      canadianStocks: number
    }
    expect(lastPayload.canadianStocks).toBe(50)
  })
})
