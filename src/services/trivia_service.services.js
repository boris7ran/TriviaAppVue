import axios from 'axios'

export default class TriviaService {
  constructor() {
    axios.defaults.baseURL = "http://jservice.io/api/"
  }

  getTrivias(id) {
    const endpoint = id ?
      `category?id=${id}` :
      'random?count=30'
    return axios.get(endpoint);
  }

  getCategories() {
    return axios.get('categories?count=10')
  }
}

export const triviaService = new TriviaService();