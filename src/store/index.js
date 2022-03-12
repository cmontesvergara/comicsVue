import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cargando:true,
    sendAnimate:false
  },
  mutations: {
    setCargando(state,payload){
      state.cargando = payload;
    },
    setSendAnimate(state,payload){
      state.sendAnimate = payload;
    },

  },
  actions: {
    setCargandoAction(context,objectPayload){
      context.commit("setCargando",objectPayload.valor);
    },
    setSendAnimateAction(context,objectPayload){
      context.commit("setSendAnimate",objectPayload.valor);
    },
    

  },
  getters: {
    isCargando(state){
      return state.cargando;
    },
    isSendAnimate(state){
      return state.sendAnimate;
    }
  }
})
