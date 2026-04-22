<template>
  <div>
    <h1>Character Builder</h1>

    <NameInput />
    <StatControls />
    <CharacterSummary />
  </div>
</template>

<script setup>
import NameInput from './components/NameInput.vue'
import StatControls from './components/StatControls.vue'
import CharacterSummary from './components/CharacterSummary.vue'
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}
</style>