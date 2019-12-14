<template>
<div id="app">
  <select v-model="attr">
    <option value="height">高さ</option>
    <option value="width">幅</option>
  </select>
  <input type="text" class="form-Control" v-model="size"><br>
  <img src="http://wings.msn.to/image/wings.jpg" v-bind:[attr]="size">
  <Increment></Increment>
</div>
</template>

<script>
import Increment from './component/increment.vue'
export default {
    components:Increment,
    data: function(){
    return {
      attr:'width',
      size:100,
    }
    }

}
</script>

<style scoped>
</style>
