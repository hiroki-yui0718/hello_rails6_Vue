<template>
<div id="app">
  <div id="main" class="mt-3" @mousemove="onmousemove">
    screen:{{screenX}}/{{screenY}}<br>
    page:{{pageX}}/{{pageY}}<br>
    client:{{clientX}}/{{clientY}}<br>
    screen:{{offsetX}}/{{offsetY}}<br>
  </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {

      screenX: 0,
      screenY: 0,
      pageX: 0,
      pageY: 0,
      clientX: 0,
      clientY: 0,
      offsetX: 0,
      offsetY: 0,
    }
  },
    methods: {
    onmousemove:function(e){
      this.screenX = e.screenX,
      this.screenY = e.screenY,
      this.pageX = e.pageX,
      this.pageY = e.pageY,
      this.clientX = e.clientX,
      this.clientY = e.clientY,
      this.offsetX = e.offsetX,
      this.offsetY = e.offsetY
    }
  }
  } 
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
