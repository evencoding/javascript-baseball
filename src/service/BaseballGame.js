const { generateRandomNumbers } = require('../GenerateRandomNumbers');

class BaseballGame {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = generateRandomNumbers();
  }
}

module.exports = BaseballGame;
