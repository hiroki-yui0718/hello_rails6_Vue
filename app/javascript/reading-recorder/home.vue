<template>
<div id="app">
<p>{{bookCount}}</p>
<el-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</div>
</template>

<script>
export default {
    computed:{}
}
</script>

<style scoped>
</style>