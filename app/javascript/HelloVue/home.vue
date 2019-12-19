<template>
<div id="app">
    <el-form ref="form" :model="form" label-width="120px" class="mt-3 border-bottom">
   <el-form-item label="Date form"> 
    <el-date-picker
      v-model="form.date"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="Activity form">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
  </el-form>
  <ul v-if="form">
    <li>{{form.date}}<br></li>
    <li>{{form.desc}}</li>
</ul>
</div>
</template>

<script>
import { UPDATE_FORM } from './mutation-types';
import { mapActions } from 'vuex';
export default {
    data:function() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        index:Number,
        form:{
            date:"",
            desc:"",
        }
        
        
      }
    },
    methods:{
        ...mapActions([UPDATE_FORM]),
        onSubmit:function(){
            this[UPDATE_FORM](this.form)
        }
    },

}
</script>

<style scoped>
</style>
