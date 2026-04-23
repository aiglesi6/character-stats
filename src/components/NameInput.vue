<template>
  <div>
    <h2>Character Name:</h2>
    <input v-model="name" placeholder="Enter Name:" />
  </div>
</template>

<script setup>
import { useCharacterStore } from '../stores/character'
import { computed } from 'vue'

const store = useCharacterStore()

const name = computed({
  get: () => store.name,
  set: (value) => store.setName(value)
})
</script>