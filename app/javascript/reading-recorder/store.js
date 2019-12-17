import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict:true,
    state:{
        books:[],
    },
    getters:{
        bookCount(state){
            return state.books.length
        },
        getRangeByPage(state){
            return page =>{
                const SIZE  = 3
                return state.books.slice((page -1) * SIZE ,(page -1) *SIZE +SIZE)
            }
        }
    },
    plugins:[createPersistedState({
        key : 'reading-recorder',
        storage:localStorage
    })]
})