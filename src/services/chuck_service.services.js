import chucknorris from 'chucknorris-io'

export default class ChuckServices {
  constructor() {
    this.client = new chucknorris();
  }

  getRandomJoke(category) {
    return this.client.getRandomJoke(category);
  }

  getAllCategories() {
    return this.client.getJokeCategories();
  }
}

export const chuckServices = new ChuckServices();