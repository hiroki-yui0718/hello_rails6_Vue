import Vue from 'vue'
import Vuex from 'vuex'
import {UPDATE_FORM} from './mutation-types'
// import createPersistedState from 'vuex-persistedstate'
import {db} from '../packs/firebase'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        form:[],
    },
    getters:{
        formCount(state){
            return state.form.length
        },
        allForm(state){
            db.ref('memo').on('value',  snapshot => console.log(snapshot.val()));
            return state.form
        },
    },
    mutations:{
        [UPDATE_FORM](state,payload){
            state.form.push(payload)
        },

   },
   actions:{
    [UPDATE_FORM]({commit},data){
        console.log(data.date)
        console.log(data.desc)
         db.ref('memo').push(data)
        }
   },
//    plugins:[createPersistedState({
//     key : 'reading-recorder',
//     storage:localStorage
// })]
})