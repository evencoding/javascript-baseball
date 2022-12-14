const { Console } = require('@woowacourse/mission-utils');

const BaseballGame = require('../service/BaseballGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../utils/Validator');
const { COMMAND, PROCESS } = require('../constants');

class BaseballController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  winningHandler = {
    [PROCESS.WIN]: this.#gameOver.bind(this),
    [PROCESS.FAIL]: this.#inputNumbers.bind(this),
  };

  commandHandler = {
    [COMMAND.RESTART]: this.#restart.bind(this),
    [COMMAND.EXIT]: this.#exitGame.bind(this),
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

  #validateRetryCommand(command) {
    Validator.throwErrorIfInvalidCommand(command);

    this.commandHandler[command]();
  }

  #restart() {
    this.#baseballGame = new BaseballGame();
    this.#inputNumbers();
  }

  #exitGame() {
    Console.close();
  }
}

module.exports = BaseballController;
