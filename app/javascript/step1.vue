<template>
<div id="app">
  <p>{{ message }}</p>
  <button @click="onclick">クリック</button>
    <p>{{ date }}</p>
    <img :src="path" alt="ロゴ画像" @mouseover="mouse1" @mouseleave="mouse2" />

</div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!!",
      date: "",
      path:'http://www.web-deli.com/image/linkbanner_l.gif',

    }
  },
    methods: {
    onclick: function(){
      this.date = new Date().toLocaleString();
    },
    mouse1: function(){
      this.path = 'http://www.web-deli.com/image/home_chara.gif';
    },
    mouse2: function(){
      this.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
    },
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
