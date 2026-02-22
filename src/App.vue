<script setup lang="ts">
import { reactive } from 'vue'
import InputPanel from './components/InputPanel.vue'
import OutputPanel from './components/OutputPanel.vue'
import AppFooter from './components/AppFooter.vue'

const inputValues = reactive({ tfsa: 0, rrsp: 0, registered: 0, canadianStocks: 0, usStocks: 0, internationalStocks: 0, bonds: 0 })
</script>

<template>
  <main>
    <h1>Asset Locator 5000</h1>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Allocate your registered assets
      across account types to optimise for tax efficiency and long-term growth.
    </p>
    <div class="panels">
      <InputPanel v-model="inputValues" />
      <OutputPanel :values="inputValues" />
    </div>
    <AppFooter />
  </main>
</template>
