const { generateRandomNumbers } = require('./GenerateRandomNumbers');

class BaseballGame {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = generateRandomNumbers();
    console.log(this.#computerNumbers);
  }

  getStrikeCount(userNumbers) {
    return userNumbers.filter((number, index) => {
      return number === this.#computerNumbers[index];
    }).length;
  }

  getBallCount({ userNumbers, strike }) {
    const bothHaveNumbersCount = userNumbers.filter((number) => {
      return this.#computerNumbers.includes(number);
    }).length;

    return bothHaveNumbersCount - strike;
  }
}

module.exports = BaseballGame;
