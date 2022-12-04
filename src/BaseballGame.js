const { generateRandomNumbers } = require('./GenerateRandomNumbers');

class BaseballGame {
  #computerNumbers;

  constructor() {
    // 테스트하기가 어렵다. 컨트롤러에서 숫자를 생성해서 넘겨줘야 하나?
    this.#computerNumbers = generateRandomNumbers();
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
