export default({
  namespaced:true,
  state: { //初期の値
    updated: (new Date()).toTimeString()
  },
  mutations:{ //データに変化を与える所
      setUpdated(state){
        state.updated = (new Date()).toTimeString()
      }
  }
})