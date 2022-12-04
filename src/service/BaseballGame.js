const { generateRandomNumbers } = require('../GenerateRandomNumbers');

class BaseballGame {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = generateRandomNumbers();
    console.log(this.#computerNumbers);
  }

  getBallCount(userNumbers) {
    return userNumbers.filter((number) =>
      this.#computerNumbers.includes(number)
    ).length;
  }

  getStrikeCount(userNumbers) {}
}

module.exports = BaseballGame;
