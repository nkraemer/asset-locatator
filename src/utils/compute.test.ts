import { toNum, compute } from './compute'

describe('toNum', () => {
  it('returns finite numbers unchanged', () => {
    expect(toNum(42)).toBe(42)
    expect(toNum(0)).toBe(0)
    expect(toNum(-5.5)).toBe(-5.5)
  })

  it('returns 0 for NaN', () => {
    expect(toNum(NaN)).toBe(0)
  })

  it('returns 0 for Infinity', () => {
    expect(toNum(Infinity)).toBe(0)
  })

  it('returns 0 for -Infinity', () => {
    expect(toNum(-Infinity)).toBe(0)
  })
})

describe('compute', () => {
  const base = { tfsa: 10000, rrsp: 20000, registered: 5000, exchangeRate: null as number | null }

  it('100% total allocation: outputs equal inputs (no exchange rate)', () => {
    const result = compute({
      ...base,
      canadianStocks: 40,
      usStocks: 30,
      internationalStocks: 30,
      bonds: 0,
    })
    expect(result.tfsa).toBeCloseTo(10000)
    expect(result.rrsp).toBeCloseTo(20000)
    expect(result.registered).toBeCloseTo(5000)
  })

  it('50% total allocation: outputs are half of inputs', () => {
    const result = compute({
      ...base,
      canadianStocks: 25,
      usStocks: 25,
      internationalStocks: 0,
      bonds: 0,
    })
    expect(result.tfsa).toBeCloseTo(5000)
    expect(result.rrsp).toBeCloseTo(10000)
    expect(result.registered).toBeCloseTo(2500)
  })

  it('all allocations 0: all outputs are 0', () => {
    const result = compute({
      ...base,
      canadianStocks: 0,
      usStocks: 0,
      internationalStocks: 0,
      bonds: 0,
    })
    expect(result.tfsa).toBe(0)
    expect(result.rrsp).toBe(0)
    expect(result.registered).toBe(0)
  })

  it('all account balances 0: all outputs are 0', () => {
    const result = compute({
      tfsa: 0,
      rrsp: 0,
      registered: 0,
      canadianStocks: 50,
      usStocks: 50,
      internationalStocks: 0,
      bonds: 0,
      exchangeRate: 1.35,
    })
    expect(result.tfsa).toBe(0)
    expect(result.rrsp).toBe(0)
    expect(result.registered).toBe(0)
  })

  it('NaN allocation field is treated as 0 (50% total with one NaN field)', () => {
    const result = compute({
      ...base,
      canadianStocks: NaN,
      usStocks: 50,
      internationalStocks: 0,
      bonds: 0,
    })
    expect(result.tfsa).toBeCloseTo(5000)
    expect(result.rrsp).toBeCloseTo(10000)
    expect(result.registered).toBeCloseTo(2500)
  })

  it('over-100% allocation: outputs scale above inputs', () => {
    const result = compute({
      ...base,
      canadianStocks: 60,
      usStocks: 60,
      internationalStocks: 0,
      bonds: 0,
    })
    expect(result.tfsa).toBeCloseTo(12000)
    expect(result.rrsp).toBeCloseTo(24000)
    expect(result.registered).toBeCloseTo(6000)
  })

  it('exchange rate multiplies outputs', () => {
    const result = compute({
      ...base,
      exchangeRate: 1.35,
      canadianStocks: 50,
      usStocks: 50,
      internationalStocks: 0,
      bonds: 0,
    })
    expect(result.tfsa).toBeCloseTo(13500)
    expect(result.rrsp).toBeCloseTo(27000)
    expect(result.registered).toBeCloseTo(6750)
  })

  it('null exchange rate is treated as 1 (no conversion)', () => {
    const result = compute({
      ...base,
      exchangeRate: null,
      canadianStocks: 50,
      usStocks: 50,
      internationalStocks: 0,
      bonds: 0,
    })
    expect(result.tfsa).toBeCloseTo(10000)
    expect(result.rrsp).toBeCloseTo(20000)
    expect(result.registered).toBeCloseTo(5000)
  })

  it('zero exchange rate is treated as 1 (no conversion)', () => {
    const result = compute({
      ...base,
      exchangeRate: 0,
      canadianStocks: 100,
      usStocks: 0,
      internationalStocks: 0,
      bonds: 0,
    })
    expect(result.tfsa).toBeCloseTo(10000)
  })
})
