<script setup lang="ts">
defineProps<{
  values: {
    tfsa: number
    rrsp: number
    registered: number
  }
}>()
</script>

<template>
  <section class="panel output-panel">
    <h2>Outputs</h2>
    <div class="field">
      <label>TFSA</label>
      <output>{{ values.tfsa }}</output>
    </div>
    <div class="field">
      <label>RRSP</label>
      <output>{{ values.rrsp }}</output>
    </div>
    <div class="field">
      <label>Registered</label>
      <output>{{ values.registered }}</output>
    </div>
  </section>
</template>
