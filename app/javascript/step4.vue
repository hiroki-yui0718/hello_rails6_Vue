<template>
<div id="app">
  <table class="table table-hover">
    <thead><tr><th>ISBN</th><th>書名</th><th>価格</th></tr></thead>
    <tbody><tr v-for="b in books">
      <td>{{ b.isbn }}</td>
      <td>{{ b.title }}</td>
      <td>{{ b.price }}円</td>
    </tr></tbody>
  </table>
</div>
</template>

<script>
export default {
    data: function(){
    return {
        books: [
    {
      isbn: '978-4-7981-5757-3',
      title: 'JavaScript逆引きレシピ',
      price: 2800
    },
    { 
      isbn: '978-4-8399-6644-7',
      title: 'たのしいラズパイ電子工作ブック',
      price: 1900
    },
    {
      isbn: '978-4-7741-9763-0',
      title: '3ステップでしっかり学ぶ Python入門',
      price: 2480
    },
    {
      isbn: '978-4-7981-5382-7',
      title: '独習C# 新版',
      price: 3600
    }
    ]
    }
    }

}
</script>

<style scoped>
</style>
