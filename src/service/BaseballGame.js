const { RESULT_MESSAGES } = require('../constants');
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
      return RESULT_MESSAGES.strikeAndBall(strikeCount, ballCount);
    }
    if (strikeCount === 0 && ballCount === 0) return RESULT_MESSAGES.NOTHING;
    if (strikeCount > 0) return RESULT_MESSAGES.onlyStrike(strikeCount);
    if (ballCount > 0) return RESULT_MESSAGES.onlyBall(ballCount);
  }
}

module.exports = BaseballGame;
