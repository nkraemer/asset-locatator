<script setup lang="ts">
interface InputValues {
  tfsa: number
  rrsp: number
  registered: number
  canadianStocks: number
  usStocks: number
  internationalStocks: number
  bonds: number
}

const props = defineProps<{
  modelValue: InputValues
}>()

const emit = defineEmits<{
  'update:modelValue': [value: InputValues]
}>()

function update(field: keyof InputValues, event: Event) {
  const val = parseFloat((event.target as HTMLInputElement).value) || 0
  emit('update:modelValue', { ...props.modelValue, [field]: val })
}
</script>

<template>
  <section class="panel input-panel">
    <h2>Inputs</h2>
    <div class="field">
      <label for="tfsa-input">TFSA</label>
      <div class="dollar-field">
        <span>$</span>
        <input id="tfsa-input" type="number" min="0" :value="modelValue.tfsa" @input="update('tfsa', $event)" />
      </div>
    </div>
    <div class="field">
      <label for="rrsp-input">RRSP</label>
      <div class="dollar-field">
        <span>$</span>
        <input id="rrsp-input" type="number" min="0" :value="modelValue.rrsp" @input="update('rrsp', $event)" />
      </div>
    </div>
    <div class="field">
      <label for="registered-input">Registered</label>
      <div class="dollar-field">
        <span>$</span>
        <input id="registered-input" type="number" min="0" :value="modelValue.registered" @input="update('registered', $event)" />
      </div>
    </div>

    <h2 class="section-heading">Allocation</h2>
    <div class="field">
      <label for="canadian-stocks-input">Canadian Stocks</label>
      <div class="percent-field">
        <input id="canadian-stocks-input" type="number" min="0" max="100" :value="modelValue.canadianStocks" @input="update('canadianStocks', $event)" />
        <span>%</span>
      </div>
    </div>
    <div class="field">
      <label for="us-stocks-input">US Stocks</label>
      <div class="percent-field">
        <input id="us-stocks-input" type="number" min="0" max="100" :value="modelValue.usStocks" @input="update('usStocks', $event)" />
        <span>%</span>
      </div>
    </div>
    <div class="field">
      <label for="international-stocks-input">International Stocks</label>
      <div class="percent-field">
        <input id="international-stocks-input" type="number" min="0" max="100" :value="modelValue.internationalStocks" @input="update('internationalStocks', $event)" />
        <span>%</span>
      </div>
    </div>
    <div class="field">
      <label for="bonds-input">Bonds</label>
      <div class="percent-field">
        <input id="bonds-input" type="number" min="0" max="100" :value="modelValue.bonds" @input="update('bonds', $event)" />
        <span>%</span>
      </div>
    </div>
  </section>
</template>
