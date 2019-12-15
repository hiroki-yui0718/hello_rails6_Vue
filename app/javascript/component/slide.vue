<template>
<div id="app">
<input type="submit" class="btn btn-primary mb-3" value="表示/非表示" @click="onclick">
<transaction appear>
    <div style="width:350px;height:200px;" class="border" v-show="flag">WINGSプロジェクトで一緒に...</div>
</transaction>
</div>
</template>

<script>
export default {
  data: function () {
    return {
    flag:true
    }
  },
    methods: {
    onclick:function(){
        this.flag=!this.flag
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
