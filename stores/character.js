import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    name: 'Hero',
    stats: {
      strength: 5,
      agility: 5,
      intelligence: 5
    },
    points: 10
  }),

  actions: {
    increaseStat(stat) {
      if (this.points > 0) {
        this.stats[stat]++
        this.points--
      }
    },

    decreaseStat(stat) {
      if (this.stats[stat] > 0) {
        this.stats[stat]--
        this.points++
      }
    },

    setName(newName) {
      this.name = newName
    },

    resetCharacter() {
      this.name = 'Hero'
      this.stats = { strength: 5, agility: 5, intelligence: 5 }
      this.points = 10
    }
  }
})