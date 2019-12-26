import Vue from 'vue'
import Vuex from 'vuex'
import {UPDATE_FORM,DELETE_FORM} from './mutation-types'
// import createPersistedState from 'vuex-persistedstate'
import {db} from '../packs/firebase'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        form:[],
        list:[]
    },
    getters:{
        allForm(state){
            db.ref('memo').on('value', snapshot => { // eslint-disable-line
                if (snapshot) {
                    const rootList = snapshot.val();
                    state.form.length = 0
                    Object.keys(rootList).forEach((val, key) => {
                      state.form.push(rootList[val]);
                    })
                  }
                })
                return state.form
        },
        formCount(state){
            return state.form.length
        },
        allDesc(state){
            state.list.length = 0
            state.form.some( function( value, index, array ) {
                state.list.push(value['desc'])
            });
            return state.list
        }
    },
    mutations:{
        [UPDATE_FORM](state,payload){
            state.form.push(payload)
        },
        [DELETE_FORM](state,payload){
            state.form.some( function( value, index, array ) {
            if(value==payload){
                this.state.splice(0, index + 1)
                return true
            }
 
        });

        },
   },
   actions:{
    [UPDATE_FORM]({},data){
         db.ref('memo').push(data)
        },
   [DELETE_FORM]({},data){
    db.ref("memo").on("value", function(snapshot) {
        snapshot.forEach(function(children) {
      //children.val().userIdとかで必要な値を取ればOK
      if(children.val().desc == data){
        console.log(children)
         db.ref('memo').child(children.key).remove();
      }
         });
        }); 
   }
//    plugins:[createPersistedState({
//     key : 'reading-recorder',
//     storage:localStorage
// })]
   }
})