<template><div id="app">
<h2 class="p-3">Reading Recoder</h2>
<el-menu 
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>Info</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
</el-menu>
<router-view></router-view>
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