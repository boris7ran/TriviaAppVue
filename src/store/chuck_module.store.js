import { chuckServices } from './../services/chuck_service.services'

export const ChuckStoreModule = {
  namespaced: true,

  state: {
    randomJoke: '',
    error: []
  },

  mutations: {
    setRandomJoke(state, payload){
      state.randomJoke = payload;
    },
    
    setError(state, payload){
      state.error.push(payload);
    }
  },

  actions: {
    chuckJoke(context) {
      chuckServices.getRandomJoke()
        .then(response => {
          // console.log('MODULE', response)
          context.commit('setRandomJoke', response);
        }).catch(error => {
          context.commit('setError', error);
        })
    }
  },

  getters: {
    getRandomJoke(state){
      return state.randomJoke;
    }
  }
}