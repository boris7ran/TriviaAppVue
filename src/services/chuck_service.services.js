import chucknorris from 'chucknorris-io'

export default class ChuckServices {
  constructor() {
    this.client = new chucknorris();
  }

  getRandomJoke() {
    return this.client.getRandomJoke();
  }
}

export const chuckServices = new ChuckServices();