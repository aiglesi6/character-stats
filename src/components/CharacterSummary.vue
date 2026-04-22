<template>
  <div>
    <h2>Your Character:</h2>

    <p>Name: {{ store.name }}</p>

    <ul>
      <li v-for="(value, key) in store.stats" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>

    <p>Total: {{ store.totalStats }}</p>
    <p>Power: {{ store.powerLevel.toFixed(1) }}</p>
  </div>
</template>

<script>
import { useCharacterStore } from '../stores/character'

export default {
  setup() {
    const store = useCharacterStore()
    return { store }
  }
}
</script>