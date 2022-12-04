const { Console } = require('@woowacourse/mission-utils');
const BaseballGame = require('../BaseballGame');
const { GAME_VALUE, COMMAND } = require('../constants');
const Validator = require('../Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BaseballController {
  #baseball;
  #commandHandler;

  constructor() {
    this.#baseball = new BaseballGame();
    this.#commandHandler = {
      [COMMAND.RESTART]: this.restartGame.bind(this),
      [COMMAND.EXIT]: this.exitGame.bind(this),
    };
  }

  gameStart() {
    OutputView.printGameStartMessage();

    this.inputNumbers();
  }

  inputNumbers() {
    InputView.askNumbers(this.handleUserNumbers.bind(this));
  }

  handleUserNumbers(userNumbers) {
    Validator.throwErrorIfInvalidNumbers(userNumbers);

    this.printResult([...userNumbers].map(Number));
  }

  printResult(userNumbers) {
    const strike = this.#baseball.getStrikeCount(userNumbers);
    const ball = this.#baseball.getBallCount({ userNumbers, strike });

    OutputView.printResult({ strike, ball });

    if (strike === GAME_VALUE.LENGTH) {
      this.noticeUserWin();
      return;
    }
    this.inputNumbers();
  }

  noticeUserWin() {
    OutputView.printWinMessage();

    this.inputRestartOrExit();
  }

  inputRestartOrExit() {
    InputView.askRestartOrExit(this.handleRestartOrExit.bind(this));
  }

  handleRestartOrExit(command) {
    Validator.throwErrorIfInvalidCommand(command);

    this.#commandHandler(command)();
  }

  restartGame() {
    this.#baseball = new BaseballGame();

    this.inputNumbers();
  }

  exitGame() {
    Console.close();
  }
}

module.exports = BaseballController;
