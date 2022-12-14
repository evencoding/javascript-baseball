const BaseballGame = require('../service/BaseballGame');
const OutputView = require('../views/OutputView');

class BaseballController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  startGame() {
    OutputView.printStartMessage();
  }
}

module.exports = BaseballController;
