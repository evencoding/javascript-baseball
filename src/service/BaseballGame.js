const { generateRandomNumbers } = require('../utils/NumberGenerator');

class BaseballGame {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = generateRandomNumbers();
    console.log(this.#computerNumbers);
  }
}

module.exports = BaseballGame;
