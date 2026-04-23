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
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #0f172a;
  background-image: url('/character.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 900px auto;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-right: 380px;
  padding-top: 20px;
}

.section {
  padding: 15px;
  border-radius: 8px;

  background-color: #1e3a8a;
  border: 1px solid #3b82f6;
  color: white;
}
</style>