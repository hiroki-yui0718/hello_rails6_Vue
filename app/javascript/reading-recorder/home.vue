<template>
<div id="app" class="mt-3">
  <div class="list">
    <p>{{ bookCount }}件の読書情報が記録されています。</p>
    <BookInfo v-for="(b, i) of books"
      :linkable="true" :book="b" :index="i + 1" :key="b.isbn"></BookInfo>
    <div>
      <el-pagination background layout="prev, pager, next"
        :total="bookCount" :page-size="3" @current-change="onchange"></el-pagination>
    </div>
  </div>
  <div style="height:700px;"></div>
  <p id="behavior">Hello Vue!</p>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import BookInfo from './bookInfo.vue'
export default {
    data :function(){
      return{
        books:[]
      }
    },
    computed:mapGetters(['bookCount','getRangeByPage']),
    components:{BookInfo},
    methods:{
      onchange:function(page){
        this.books = this.getRangeByPage(page)
      }
    },
    mounted(){
      this.books=this.getRangeByPage(1)
    }

}
</script>

<style scoped>
</style>