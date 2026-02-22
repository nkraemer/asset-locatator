<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
</script>

<template>
  <div class="counter">
    <button class="btn btn-decrement" @click="count--">-</button>
    <span class="count">Count: {{ count }}</span>
    <button class="btn btn-increment" @click="count++">+</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
}

.count {
  background: #fff;
  padding: 0.4rem 1.2rem;
  border-radius: 2rem;
  font-weight: 600;
  min-width: 8rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.btn {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  line-height: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s, box-shadow 0.1s;
}

.btn:active {
  transform: scale(0.93);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.btn-decrement {
  background: #f64f59;
  color: #fff;
}

.btn-increment {
  background: #43e97b;
  color: #fff;
}
</style>
