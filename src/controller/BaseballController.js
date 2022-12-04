const BaseballGame = require('../service/BaseballGame');
const OutputView = require('../views/OutputView');

class BaseballController {
  #baseball;

  constructor() {
    this.#baseball = new BaseballGame();
  }

  gameStart() {
    OutputView.printGameStartMessage();
  }
}

module.exports = BaseballController;
