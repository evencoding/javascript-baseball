const { Console } = require('@woowacourse/mission-utils');
const BaseballGame = require('../BaseballGame');
const { GAME } = require('../constants');
const Validator = require('../Validator');
const InputView = require('../view/inputView');
const OutputView = require('../view/outputView');

class Controller {
  #baseball;

  gameStart() {
    this.#baseball = new BaseballGame();
    OutputView.printStartMessage();
    InputView.askNumbers(this.numbersHandler.bind(this));
  }

  numbersHandler(numbers) {
    Validator.checkNumbersValidate(numbers);
    this.printResult(numbers.split('').map(Number));
  }

  printResult(numbers) {
    const strike = this.#baseball.getStrike(numbers);
    const ball = this.#baseball.getBall(numbers);

    OutputView.printResult({ strike, ball });
    if (strike === GAME.LENGTH) {
      OutputView.printAllStrike();
      InputView.askRestartOrExit(this.restartOrExitHandler.bind(this));
    } else InputView.askNumbers(this.numbersHandler.bind(this));
  }

  restartOrExitHandler(answer) {
    Validator.checkRestartValidate(answer);
    answer === GAME.RESTART ? this.gameStart() : this.gameExit();
  }

  gameExit() {
    Console.close();
  }
}

module.exports = Controller;
