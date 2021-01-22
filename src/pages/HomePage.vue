<template>
  <div class="home col">
    <div class="row justify-content-around">
      <Encounter v-for="p in pokemon" :key="p.id" :p="p" />
    </div>
    <div class="row justify-content-center w-100">
      <Pokeball />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import PokemonService from '../services/PokemonService'
import Encounter from '../components/Encounter'
import Pokeball from '../components/Pokeball'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      if (AppState.loadedPokemon.length === 0) {
        await PokemonService.loadFullPokemon(3)
      }
    })

    return { pokemon: computed(() => AppState.loadedPokemon) }
  },
  components: {
    Encounter, Pokeball
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
