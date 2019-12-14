<template>
<div id="app">
<p>現在地は{{count}}です</p>
<input type="button" @click="onclick" value="増やす">
</div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0
    }
  },
    methods: {
      onclick:function(){
      this.count++;
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