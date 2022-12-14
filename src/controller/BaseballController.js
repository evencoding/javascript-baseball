const BaseballGame = require('../service/BaseballGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BaseballController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  startGame() {
    OutputView.printStartMessage();

    this.#inputNumbers();
  }

  #inputNumbers() {
    InputView.askNumbers(this.#validateNumbers.bind(this));
  }

  #validateNumbers(numbers) {}
}

module.exports = BaseballController;
