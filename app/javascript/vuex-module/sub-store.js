export default({
    namespaced:true,
  state: { //初期の値
    updated: (new Date()).toLocaleTimeString()
  },
  mutations:{ //データに変化を与える所
      setUpdated(state){
        state.updated = (new Date()).toLocaleTimeString()
      }
  }
})