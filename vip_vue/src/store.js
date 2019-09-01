import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartCount:0
  },
  getters: {
    cartCount(state) {
      return state.cartCount
    }
  },
   mutations: {
    addCartCount(state){
       state.cartCount++
     },
     descCartCount(state){
       state.cartCount--
     },
     clear(state){
       state.cartCount=0
     },
     mounted(state,c) {
       state.cartCount+=c
     },
   },
})
Vue.config.productionTip = false