<template>
<div id="app">
</div>
</template>

<script>
export default {
name: 'book-info',
props:{
    index:{type:Number},
    linkable:{type:boolean,default:false},
    book:{type:Object},
},

}
</script>

<style scoped>
</style>