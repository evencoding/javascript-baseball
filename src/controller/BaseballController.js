const BaseballGame = require('../service/BaseballGame');
const Validator = require('../Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BaseballController {
  #baseball;

  constructor() {
    this.#baseball = new BaseballGame();
  }

  gameStart() {
    OutputView.printGameStartMessage();

    InputView.askNumbers(this.handleUserNumbers.bind(this));
  }

  handleUserNumbers(userNumbers) {
    Validator.throwErrorIfInvalidNumbers(userNumbers);
  }
}

module.exports = BaseballController;
