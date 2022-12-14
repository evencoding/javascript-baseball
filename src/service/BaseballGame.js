const { generateRandomNumbers } = require('../utils/NumberGenerator');

class BaseballGame {
  #computerNumbers;
  #referee;

  constructor() {
    this.#computerNumbers = generateRandomNumbers();
    console.log(this.#computerNumbers);
  }

  getResult(numbers) {
    this.#referee = new BaseballReferee(numbers);
    const { strikeCount, ballCount } = this.#referee.getStrikeAndBallCount(
      this.#computerNumbers
    );

    return { strikeCount, ballCount };
  }
}

module.exports = BaseballGame;
