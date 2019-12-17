<template>
<div id="app">
<img :src="book.image"/>
<ul>
    <li v-if="index">{{ index }}.</li>
    <li>{{book.title}}({{book.price}}円)</li>
    <li>{{book.author}}</li>
    <li>{{book.publisher}}</li>
    <li>{{book.published}}</li>
</ul>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import {UPDATE_CURRENT} from './mutation-types'
export default {
name: 'book-info',
props:{ //パラメータの受け渡し
    index:{type:Number},
    linkable:{type:Boolean,default:false},
    book:{type:Object},
},
method:{
    ...mapActions(['UPDATE_CURRENT']) //スプレッド演算子
},

}
</script>

<style scoped>
</style>