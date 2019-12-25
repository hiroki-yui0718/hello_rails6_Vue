<template>
<div id="app" class="mt-3">
    <el-form :inline="true">
      <el-form-item>
        <el-input type="text" size="large" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onclick">検索</el-button>
      </el-form-item>
    </el-form>
  <BookInfo v-for="(b,i) of books" :linkable="true" :book="b" :index="i+1"  :key="b.id">
</BookInfo>
  <div style="height:700px;"></div>
  <button @click="show = !show" class="btn btn-primary">切り替え</button>
  <transition name="fade">
  <p v-if="show">Hello Vue!!</p>
  </transition>
  <div style="height:700px;"></div>
</div>
</template>

<script>
import BookInfo from './bookInfo.vue'
export default {
    components:{BookInfo},
    data:function(){
        return{
            keyword:"vuejs",
            books:[],
            show:true
        }
    },
methods: {
    onclick: function() {
      this.$http('https://www.googleapis.com/books/v1/volumes?q='
        + this.keyword)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.books = []
          for (let b of data.items) {
            let authors = b.volumeInfo.authors
            let price = b.saleInfo.listPrice
            let img = b.volumeInfo.imageLinks
            this.books.push({
              id: b.id,
              title: b.volumeInfo.title,
              author: authors ? authors.join(',') : '',
              price: price ? price.amount : '-',
              publisher: b.volumeInfo.publisher,
              published: b.volumeInfo.publishedDate,
              image: img ? img.smallThumbnail : '',
            })
          }
        })
    }
}
}
</script>

<style scoped>
.fade-enter{
  opacity:1;
}
.fade-enter-active{
  transition:opacity 5s;
}
.fade-enter-to{
  opacity:0;
}
.fade-leave{
opacity:0;
}
.fade-leave-active{
  transition:opacity 5s;
}
.fade-leave-to{
opacity:1;
}
</style>