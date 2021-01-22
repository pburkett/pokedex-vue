<template>
  <div @mousemove="moveAt">
    <img id="pokeball"
         src="../assets/img/pokeball.png"
         draggable
         @click="pickUp"
    >
  </div>
</template>

<script>
import { AppState } from '../AppState'
export default {
  name: 'Component',
  setup() {
    return {
      bool: AppState.holdingPokeball,
      pickUp(event) {
        console.log(event)
        AppState.holdingPokeball = true
        document.onmousemove = this.getCursorXY

        document.getElementById('pokeball').onclick = function() {
          document.getElementById('pokeball').style.top = ''
          document.getElementById('pokeball').style.left = ''
          document.onmousemove = ''
          document.getElementById('pokeball').onclick = ''
          if (window.Event) {
            document.captureEvents(Event.MOUSEMOVE)
          }
        }
      },
      getCursorXY(e) {
        let x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + 'px'
        let y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + 'px'
        x = x - 125 + 'px'
        y = y - 200 + 'px'
        document.getElementById('pokeball').style.top = y
        document.getElementById('pokeball').style.left = x
      },
      drop() {

      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img{

  width:250px;
  height:250px;
  top: 400px;
  left: 420px;
  position:absolute;

}
</style>
