<template>
<div id="app">
  <div class="row">
    <div class="col-md-8">
    <h2 class="p-3 border-bottom">Vue.js</h2>
     </div>
     </div>
<div class="row">
<div class="col-md-4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
          <Search class="ml-4 mt-2"></Search>
    </el-menu>
</div>
<div class="col-md-8">
<router-view></router-view>
</div>
</div>
</div>
</template>

<script>
import Search from './component/search.vue'
export default {
    components:{Search},
    data:function(){
        return{
          form:[],
            isCollapse:true,
      selected: null,
        }
    },
    methods:{
        handleOpen:function(){
        },
        handleClose:function(){

        }
    },

}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>