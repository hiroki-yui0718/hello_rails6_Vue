<template>
  <div id="app">
    メイン：{{mainUpdated}} <br />
    サブ：{{subUpdated}} <br />
    <input type="button" class="mt-3 btn btn-primary" value="更新" @click="setUpdated" />
  </div>
</template>

<script>
export default {
  computed:{ //値を関数で書く
      mainUpdated(){
          return this.$store.state.main.updated;
      },
      subUpdated(){
          return this.$store.state.sub.updated;
      }

  },
    methods: {
          setUpdated(){
          this.$store.commit('main/setUpdated')
          this.$store.commit('sub/setUpdated')
        
      }
    }

}
</script>

<style scoped>
</style>