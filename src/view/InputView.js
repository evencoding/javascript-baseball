const { Console } = require('@woowacourse/mission-utils');
const Controller = require('../controller');
const Validator = require('../Validator');

const InputView = {
  controller: new Controller(),

  askNumbers() {
    Console.readLine(
      '숫자를 입력해주세요 : ',
      this.randomNumbersHandler.bind(this)
    );
  },

  randomNumbersHandler(numbers) {
    Validator(numbers);
    this.controller.printResult(numbers);
  },

  askRestartOrExit() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      this.restartOrExitHandler.bind(this)
    );
  },

  restartOrExitHandler(answer) {
    Validator(answer);
    (answer === '1' && this.controller.gameStart()) ||
      this.controller.gameExit();
  },
};

module.exports = InputView;
