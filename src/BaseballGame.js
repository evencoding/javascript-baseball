const { generateRandomNumbers } = require('./GenerateRandomNumbers');

class BaseballGame {
  #randomNumbers;
  #strikeCount;

  constructor() {
    this.#randomNumbers = generateRandomNumbers();
    this.#strikeCount = 0;
  }

  getStrike(numbers) {
    this.#strikeCount = numbers.filter(
      (number, idx) => number === this.#randomNumbers[idx]
    ).length;

    return this.#strikeCount;
  }

  getBall(numbers) {
    const bothHaveNumbersCount = numbers.filter((number) =>
      this.#randomNumbers.includes(number)
    ).length;

    return this.#strikeCount - bothHaveNumbersCount;
  }
}

module.exports = BaseballGame;
