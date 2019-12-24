import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'
import {UPDATE_CURRENT,UPDATE_BOOK} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    strict:true, //厳格モード
    state:{
        books:[],
        current:null,
    },
    getters:{
        allBooks(state){
            return state.books
        },
        bookCount(state){
            return state.books.length
        },
        getRangeByPage(state){
            return page =>{
                const SIZE  = 3
                return state.books.slice((page -1) * SIZE ,(page -1) *SIZE +SIZE)
            }
        },
        current(state){
            return state.current
        },
        getBookById(state){
            return id =>{
                return state.books.find(book => book.id == id)
            }
        }
    },
    mutations:{
        [UPDATE_CURRENT](state,payload){ //payloadは引数
            state.current = payload
        },
        [UPDATE_BOOK](state,payload){
            let b = this.getters.getBookById(payload.id)
            if(b){
                //UPDATE
                Object.assign(b,payload)
            }else{
                //配列
                state.books.push(payload) //実際にコミットするのはvueなのでpayloadを適当にコミットすればいい
            }
        },

    },
    actions:{
        [UPDATE_CURRENT]({commit},payload){
            commit(UPDATE_CURRENT,payload)
        },
        [UPDATE_BOOK]({commit},payload){
            commit(UPDATE_BOOK,payload)
        }
    },
    plugins:[createPersistedState({
        key : 'reading-recorder',
        storage:localStorage
    })]
})