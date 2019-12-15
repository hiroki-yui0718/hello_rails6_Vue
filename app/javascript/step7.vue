<template>
<div id="app">
  <input type="button" @click="plus" value="+">
  {{count}}
  <input type="button" value="-" @click="minus">
</div>
</template>

<script>
export default {
    computed:{
      count(){
        return this.$store.state.count
      }
    },
    methods: {
      minus(){
        this.$store.commit('minus')
      },
      plus(){
        this.$store.commit('plus')
      }

    }

}
</script>

<style scoped>
</style>
