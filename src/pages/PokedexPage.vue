<template>
  <div class="pokedex col">
    <div class="row justify-content-around">
      <PokedexDisplay :v-if="pokemon" v-for="p in pokemon" :key="p.id" :p="p" />
    </div>
  </div>
</template>

<script>
import PokedexDisplay from '../components/PokedexDisplay'
import { onMounted, computed } from 'vue'
import pokedexService from '../services/PokedexService'
import { AppState } from '../AppState'
export default {
  name: 'Pokedex',
  setup() {
    onMounted(async() => {
      await pokedexService.getAll()
    })
    return { pokemon: computed(() => AppState.pokedex) }
  },
  components: { PokedexDisplay }
}
</script>
