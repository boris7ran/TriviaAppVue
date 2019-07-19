import Vue from 'vue'
import Vuex from 'vuex'
import { ChuckStoreModule } from './chuck_module.store'
import { TriviaStoreModule } from './trivia_module.store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    ChuckStoreModule,
    TriviaStoreModule
  }
})
