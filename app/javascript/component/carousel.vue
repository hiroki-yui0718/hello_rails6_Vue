<template>
<div id="app">
  <el-carousel :interval="5000" arrow="hover">
    <el-carousel-item>
      <div>
        <h3>WINGSプロジェクト</h3>
        <p>ようこそ！WINGSプロジェクトへ</p>
        <img src="https://wings.msn.to/image/wings.jpg" />
      </div>
    </el-carousel-item>
    <el-carousel-item>
        <div>
          <h3>メンバー募集中！</h3>
          一緒に執筆のお仕事をしてみませんか？<br />
          現在、WINGSでは執筆メンバーを募集しています。
        </div>
    </el-carousel-item>
    <el-carousel-item>
      <div>
        <h3>What's New</h3>
        WINGSの最新情報です。<br />
        RSSでも配信しています。是非ご覧ください。<br />
        <a href="https://wings.msn.to/index.php/-/A-02/">最新情報一覧</a>
      </div>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
    methods: {
  }
} 
</script>

<style scoped>
.el-carousel__item {
  height: 250px;
  background-color: #98e7e7;
  color: #000;
  opacity: 0.8;
  text-align: center;
}

.el-carousel__item div {
  margin: 15px;
}
</style>