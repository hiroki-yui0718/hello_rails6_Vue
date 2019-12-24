<template>
<div id="app">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px" class="mt-3 border-bottom">
   <el-form-item label="Date form"> 
    <el-date-picker
      v-model="form.date"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </el-date-picker><br>
    {{form.date}}
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
    <el-input type="textarea" v-model="form.desc"></el-input>
    {{form.desc}}
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>

  </el-form>
     <p class="mt-3">{{formCount}}件のメッセージが登録されています。</p>
  <ul v-for="(f,index) in allForm" :key="index">
    <div class="row">
      <div class="col-md-2">
    <li>No. {{index + 1}}</li>
    </div>
    <div class="col-md-4">
    <li style="list-style-type: none;">{{f.date}}</li>
    <li style="list-style-type: none;">{{f.desc}}</li>
    </div>
    <div class="col-md-2">
      <el-button @click="onDelete(f.desc)" icon="el-icon-circle-close" circle></el-button>
    </div>
    </div>
</ul>
</div>
</template>

<script>
import {db} from '../packs/firebase'
import { UPDATE_FORM,DELETE_FORM } from './mutation-types';
import { mapActions,mapGetters } from 'vuex';
export default {
    data:function() {
      return {
        form:[],
            rules:{
                desc:[
                    {required:true,message:"メモが未入力です。",trigger:"change"}
                ]
            },
        
      }
    },
    computed:mapGetters(['formCount','allForm']),
    methods:{
        ...mapActions([UPDATE_FORM,DELETE_FORM]),
        onSubmit:function(){
          this[UPDATE_FORM](this.form)
          this.form.date = ""
          this.form.desc=""
        },
        onDelete:function(data){
          this[DELETE_FORM](data)
        }
    },
}
</script>

<style scoped>
</style>