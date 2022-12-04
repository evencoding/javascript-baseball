const { Console } = require('@woowacourse/mission-utils');
const BaseballGame = require('../BaseballGame');
const { GAME_VALUE, COMMAND } = require('../constants');
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

    this.askNumbers();
  }

  askNumbers() {
    InputView.askNumbers(this.handleUserNumbers.bind(this));
  }

  handleUserNumbers(userNumbers) {
    Validator.throwErrorIfInvalidNumbers(userNumbers);

    this.printResult(userNumbers.split('').map(Number));
  }

  printResult(userNumbers) {
    const strike = this.#baseball.getStrikeCount(userNumbers);
    const ball = this.#baseball.getBallCount({ userNumbers, strike });

    OutputView.printResult({ strike, ball });

    strike === GAME_VALUE.LENGTH ? this.noticeUserWin() : this.askNumbers();
  }

  noticeUserWin() {
    OutputView.printWinMessage();

    InputView.askRestartOrExit(this.handleRestartOrExit.bind(this));
  }

  handleRestartOrExit(command) {
    Validator.throwErrorIfInvalidCommand(command);

    command === COMMAND.RESTART ? this.restartGame() : this.exitGame();
  }

  restartGame() {
    this.#baseball = new BaseballGame();

    this.askNumbers();
  }

  exitGame() {
    Console.close();
  }
}

module.exports = BaseballController;
