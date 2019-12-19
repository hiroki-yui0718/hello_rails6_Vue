import Vue from 'vue'
import Vuex from 'vuex'
import {UPDATE_FORM} from './mutation-types'
import createPersistedState from 'vuex-persistedstate'

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
            return state.form
        },
    },
    mutations:{
        [UPDATE_FORM](state,payload){
            state.form.push(payload)
        },

   },
   actions:{
    [UPDATE_FORM]({commit},payload){
        commit(UPDATE_FORM,payload)
    },
   },
   plugins:[createPersistedState({
    key : 'reading-recorder',
    storage:localStorage
})]
})