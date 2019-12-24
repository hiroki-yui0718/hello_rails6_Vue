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
        }
    },
    mutations:{
        [UPDATE_FORM](state,payload){
            state.form.push(payload)
        },
   },
   actions:{
    [UPDATE_FORM]({commit},data){
         db.ref('memo').push(data)
        }
   },
//    plugins:[createPersistedState({
//     key : 'reading-recorder',
//     storage:localStorage
// })]
})