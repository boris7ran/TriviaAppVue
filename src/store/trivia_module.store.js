import { triviaService } from './../services/trivia_service.services'

export const TriviaStoreModule = {
  namespaced: true,

  state: {
    trivias: [],
    categories: []
  },

  mutations: {
    setTrivias(state, payload) {
      state.trivias = payload;
    },

    setCategories(state, payload) {
      state.categories = payload;
    }
  },

  actions: {
    triviasSetFromService(context, payload){
      triviaService.getTrivias(payload)
        .then(response => {
          context.commit('setTrivias', response.data.clues ? response.data.clues : response.data)
        }).catch(error => {
          alert(error);
        })
    },

    categoriesSetFromService(context){
      triviaService.getCategories()
        .then(response => {
          context.commit('setCategories', response.data)
        }).catch(error => {
          alert(error);
        })
    }
  },

  getters: {
    getTrivias(state){
      return state.trivias;
    },

    getCategories(state){
      return state.categories;
    }
  }
}