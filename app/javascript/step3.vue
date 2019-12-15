<template>
<div id="app">
<fieldset>
    <legend>支払い方法</legend>
    クレジットカード:
    <input type="radio" v-model="pay" value="credit">
        銀行振込:
    <input type="radio" v-model="pay" value="bank">
    <hr>
    <div v-if="pay ==='credit'">
        カード番号:
        <input type="text" key="credit">
    </div>
    <div v-else-if="pay ==='bank'">
        口座番号：
         <input type="text" key="bank">
    </div>
</fieldset>
<router-link to="position"></router-link>
</div>
</template>

<script>
export default {
    data: function(){
        return {
            pay: "credit"
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
