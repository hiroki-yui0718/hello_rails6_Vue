<template>
<div id="app">
  <input type="button" @click="plus" value="+">
  {{count}}
  <input type="button" value="-" @click="minus">
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    computed:{
      count(){
        return this.$store.state.count
      }
    },
    methods: mapMutations(['plus','minus'])
      // minus(){
      //   this.$store.commit('minus')
      // },
      // plus(){
      //   this.$store.commit('plus')
      // }

    

}
</script>

<style scoped>
</style>
