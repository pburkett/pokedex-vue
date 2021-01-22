<template>
  <div class="col-3 bg-success encounter-card encounter">
    <div class="bg-success encounter-img d-flex justify-content-center align-items-end" :style="{ backgroundImage: `url(${p.img})` }">
    </div>
    <h3 class="text-center my-4 text-capitalize">
      {{ p.name }}
    </h3>
    <h5 class="text-center my-4">
      Types: {{ displayTypes() }}
    </h5>
  </div>
</template>

<script>
import { onMounted } from 'vue'
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
.pokeball-img {
  width:  120px;
}
</style>
