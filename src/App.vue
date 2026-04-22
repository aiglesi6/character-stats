<template>
  <div class="container">
    <h1>Create Your Character</h1>

    <div class="section">
      <NameInput />
    </div>

    <div class="section">
      <StatControls />
    </div>

    <div class="section">
      <CharacterSummary />
    </div>
  </div>
</template>

<script setup>
import NameInput from './components/NameInput.vue'
import StatControls from './components/StatControls.vue'
import CharacterSummary from './components/CharacterSummary.vue'
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #1e3a8a;
  border: 1px solid #3b82f6;
}
</style>