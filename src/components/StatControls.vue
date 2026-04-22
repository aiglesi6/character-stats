<template>
  <div>
    <h2>Points: {{ store.points }}</h2>

    <div v-for="(value, key) in store.stats" :key="key">
      {{ key }}: {{ value }}
      <button @click="store.increaseStat(key)">+</button>
      <button @click="store.decreaseStat(key)">-</button>
    </div>

    <button @click="store.resetCharacter">Reset</button>
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