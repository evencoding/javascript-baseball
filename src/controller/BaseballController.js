const { Console } = require('@woowacourse/mission-utils');

const BaseballGame = require('../service/BaseballGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../utils/Validator');

class BaseballController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  winningHandler = {
    [true]: this.#gameOver.bind(this),
    [false]: this.#inputNumbers.bind(this),
  };

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
    const { strikeCount, ballCount, doesUserWin } =
      this.#baseballGame.getResult(numbers);
    const resultMessage = this.#baseballGame.getResultMessage(
      strikeCount,
      ballCount
    );
    OutputView.printResult(resultMessage);

    this.winningHandler[doesUserWin]();
  }

  #gameOver() {
    OutputView.printWinningMessage();

    this.#inputRetryCommand();
  }

  #inputRetryCommand() {
    InputView.askRetryCommand(this.#validateRetryCommand.bind(this));
  }

  #validateRetryCommand(command) {}
}

module.exports = BaseballController;
