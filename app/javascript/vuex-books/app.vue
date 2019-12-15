<template>
<div id="app">
<form @submit.prevent="onclick">
<div class="row">
<div class="col-md-3">
<label for="isbn">ISBN:</label>
</div>
<div class="col-md-6">
<input type="text" name="isbn" v-model="isbn">
</div></div>
<div class="row">
<div class="col-md-3">
<label for="title">書名:</label>
</div>
<div class="col-md-6">
<input type="text" name="title" v-model="title">
</div></div>
<div class="row">
<div class="col-md-3">
<label for="price">価格:</label>
</div>
<div class="col-md-6">
<input type="text" name="price" v-model="price">
</div></div>
<input type="submit" class="mt-3 btn btn-primary" value="登録">
</form>
<hr/>
<p>書籍は全部で{{booksCount}}冊あります。</p>
<ul v-for="b of getBooksByPrice(2500)" v-bind:key="b.isbn">
<li>{{b.title}}({{b.price}}円)<br>ISBN:{{b.isbn}}</li>
</ul>
</div>
</template>

<script>
export default {
  computed:{
    booksCount(){ //値の取り出し
      return this.$store.getters.booksCount;
    }

  },
    data: function(){
      return{
        isbn: '',
        title:'',
        price: 0
      }
    },
    methods: {
      onclick:function(){
        this.$store.commit('addBook',{
          book: {
              isbn:this.isbn,title:this.title,price:this.price
          }
        })
      },
      getBooksByPrice(price){
        return this.$store.getters.getBooksByPrice(price)
      }

    }

}
</script>

<style scoped>
</style>
