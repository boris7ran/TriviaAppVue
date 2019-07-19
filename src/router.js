import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './components/TriviaApp'
import ChuckApp from './components/ChuckApp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: TriviaApp
    },
    {
      path: '/chuck',
      name: 'chuck',
      component: ChuckApp
    }
  ]
})
