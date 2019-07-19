import { triviaService } from './../services/trivia_service.services'

export const TriviaStoreModule = {
  state: {
    trivias: []
  },

  mutations: {
    setTrivias(state, payload) {
      state.trivias = payload;
    }
  },

  actions: {
    triviasSetFromService(context){
      triviaService.getAll()
        .then(response => {
          context.commit('setTrivias', response.data)
        }).catch(error => {
          alert(error);
        })
    }
  },

  getters: {
    getTrivias(state){
      return state.trivias;
    }
  }
}