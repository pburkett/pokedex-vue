<template>
  <div class="col-3  encounter-card encounter drop-zone" @click="captureAttempt()">
    <div class="encounter-img d-flex justify-content-center align-items-end" :style="{ backgroundImage: `url(${p.img})`, backgroundColor: `${p.color}`}">
    </div>
    <h3 class="text-center my-4 text-capitalize">
      {{ p.name }}
    </h3>
    <h5 class="text-center my-4">
      Types: {{ displayTypes() }}
    </h5>
    <h5 class="text-center my-4">
      Evolves to: {{ p.nextEvolution }}
    </h5>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import pokedexService from '../services/PokedexService'
import { AppState } from '../AppState'
export default {
  name: 'Encounter',
  props: {
    p: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    onMounted(() => {})
    return {
      displayTypes() {
        // let template
        const types = props.p.types
        const template = []
        types.forEach(t => {
          template.push(t.type.name[0].toUpperCase() + t.type.name.slice(1))
        })
        return template.join(', ')
      },

      capture() {
        try {
          pokedexService.capture(props.p.id)
        } catch (e) {
          console.error(e)
        }
      },
      captureAttempt() {
        console.log(AppState.holdingPokeball)
        if (AppState.holdingPokeball) {
          AppState.holdingPokeball = false
          this.capture()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "bootstrap";
.bg-img{
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-style: none;
  margin-right: auto;
  margin-left: auto;
}
.encounter-img {
  @extend .bg-img;
  margin-top: 18px;
  margin-right: auto;
  margin-left: auto;
  width:200px;
  height:200px;
  border-radius: 15%;
}
.pokedex-img{
  @extend .bg-img;
  width:80px;
  height:80px;
  border: 6px solid $pokedex-red;
}
.display-img{
  @extend .bg-img;
  width: 100px;
  height: 100px;
}
.encounter-card {
  border: 8px solid $primary;
}
.encounter-card :hover {
  transform: scale(1.1);
}
.pokeball-img {
  width:  120px;
}
</style>
