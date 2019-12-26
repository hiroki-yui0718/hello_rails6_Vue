<template><div id="app">
<h2 class="p-3">Reading Recoder</h2>
<el-menu 
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link :to="{name:'home',params:{id:1},query:{lang:'ja'},hash:'#behavior'}">Home</router-link></el-menu-item>
    <el-menu-item index="2"><router-link :to="{name:'Search'}">Search</router-link></el-menu-item>
      <el-submenu index="3">
      <template slot="title">Support</template>
      <el-menu-item index="3-1">Publisher</el-menu-item>
      <el-menu-item index="3-2">Published</el-menu-item>
  </el-submenu>
</el-menu>
<router-view></router-view>
</div>
</template>

<script>
export default {
  data:function(){
    return{
    }
  }
}
</script>

<style scoped>
</style>