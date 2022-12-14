const BaseballReferee = require('../models/BaseballReferee');

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

    return { strikeCount, ballCount, doesUserWin: strikeCount === 3 };
  }

  getResultMessage(strikeCount, ballCount) {
    if (strikeCount > 0 && ballCount > 0) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
    if (strikeCount === 0 && ballCount === 0) return `낫싱`;
    if (strikeCount > 0) return `${strikeCount}스트라이크`;
    if (ballCount > 0) return `${ballCount}볼`;
  }
}

module.exports = BaseballGame;
