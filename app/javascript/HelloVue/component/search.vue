<template>
  <div style="width:250px; height:10px;">
    <cool-select v-model="selected" :items="allDesc" placeholder="Select name" />
  </div>
</template>

<script>
import { CoolSelect } from 'vue-cool-select';
import {mapGetters} from'vuex';
export default {
        data:function() {
      return {
     selected: null,
      }
        },
      components:{CoolSelect},
      computed:mapGetters(['allDesc']),
}
</script>