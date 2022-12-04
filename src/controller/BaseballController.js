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

    this.printResult(userNumbers.split('').map(Number));
  }

  printResult(userNumbers) {
    const strike = this.#baseball.getStrikeCount(userNumbers);
    const ball = this.#baseball.getBallCount({ userNumbers, strike });

    OutputView.printResult({ strike, ball });

    strike === 3
      ? this.noticeUserWin()
      : InputView.askNumbers(this.handleUserNumbers.bind(this));
  }

  noticeUserWin() {
    OutputView.printWinMessage();
  }

  handleRestartOrExit(command) {}
}

module.exports = BaseballController;
