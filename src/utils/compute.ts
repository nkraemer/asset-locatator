export interface InputValues {
  tfsa: number
  rrsp: number
  registered: number
  canadianStocks: number
  usStocks: number
  internationalStocks: number
  bonds: number
  exchangeRate: number | null
}

export interface OutputValues {
  tfsa: number
  rrsp: number
  registered: number
}

export function toNum(n: number): number {
  return Number.isFinite(n) ? n : 0
}

// TODO: replace with real algorithm
export function compute(inputs: InputValues): OutputValues {
  const totalAllocation =
    (toNum(inputs.canadianStocks) +
      toNum(inputs.usStocks) +
      toNum(inputs.internationalStocks) +
      toNum(inputs.bonds)) /
    100
  const fxRate = inputs.exchangeRate != null && inputs.exchangeRate > 0 ? inputs.exchangeRate : 1
  return {
    tfsa: inputs.tfsa * totalAllocation * fxRate,
    rrsp: inputs.rrsp * totalAllocation * fxRate,
    registered: inputs.registered * totalAllocation * fxRate,
  }
}
