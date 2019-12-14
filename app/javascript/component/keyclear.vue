<template>
<div id="app">
<form>
    <label for="name">氏名</label>
    <input type="text" name="name" @keyup.space="clear" v-model="name">
    </form>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      name:"匿名"
    }
    
  },
    methods: {
      clear:function(){
      this.name="";
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