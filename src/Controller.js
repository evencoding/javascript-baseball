const { Console } = require('@woowacourse/mission-utils');
const BaseballGame = require('./BaseballGame');
const InputView = require('./view/inputView');
const OutputView = require('./view/outputView');

class Controller {
  baseball;

  constructor() {
    this.baseball = new BaseballGame();
  }

  static gameStart() {
    OutputView.printStartMessage();
    InputView.askNumbers();
  }

  static printResult(numbers) {
    const strike = this.baseball.getStrike(numbers);
    const ball = this.baseball.getBall(numbers);

    OutputView.printResult({ strike, ball });
    if (strike === 3) {
      OutputView.printAllStrike();
      InputView.askRestartOrExit();
    } else InputView.askNumbers();
  }

  static gameExit() {
    Console.close();
  }
}

module.exports = Controller;
