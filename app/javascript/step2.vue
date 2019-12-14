<template>
<div id="app">
    <label for="show">表示/非表示</label>
<input type="checkbox" v-model="show">
<div v-if="show">
<form>
<label for="name">氏名:</label>
<input type="text" v-model="myName" @change="onchange">
</form>
<p class="mt-1">こんにちは、{{ myName }}さん！</p>
</div>
<div v-else>
<p>現在、非表示状態です</p>    
</div>
</div>
</template>

<script>
export default {
    data: function(){
        return {
            myName: '匿名',
            show:true
        }
    },
    methods:{
        onchange:function(){
            console.log(this.myName);
        }
    }
}
</script>

<style scoped>
</style>
