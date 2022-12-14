const BaseballGame = require('../service/BaseballGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../utils/Validator');

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

  #validateNumbers(numbers) {
    Validator.throwErrorIfInvalidNumbers(numbers);

    this.#printResult([...numbers].map(Number));
  }

  #printResult(numbers) {
    const { strikeCount, ballCount } = this.#baseballGame.getResult(numbers);

    OutputView.printResult(strikeCount, ballCount);
  }
}

module.exports = BaseballController;
