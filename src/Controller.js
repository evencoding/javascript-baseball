const { Console } = require('@woowacourse/mission-utils');
const BaseballGame = require('./BaseballGame');
const InputView = require('./view/inputView');
const OutputView = require('./view/outputView');

class Controller {
  #baseball;

  gameStart() {
    this.#baseball = new BaseballGame();
    OutputView.printStartMessage();
    InputView.askNumbers();
  }

  printResult(numbers) {
    const strike = this.#baseball.getStrike(numbers);
    const ball = this.#baseball.getBall(numbers);

    OutputView.printResult({ strike, ball });
    if (strike === 3) {
      OutputView.printAllStrike();
      InputView.askRestartOrExit();
    }
  }

  gameExit() {
    Console.close();
  }
}

module.exports = Controller;
