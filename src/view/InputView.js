const { Console } = require('@woowacourse/mission-utils');
const Controller = require('../Controller');
const Validator = require('../Validator');

const InputView = {
  askNumbers() {
    Console.readLine('숫자를 입력해주세요 : ', this.numbersHandler.bind(this));
  },

  numbersHandler(numbers) {
    Validator(numbers);
    Controller.printResult(numbers.split(''));
  },

  askRestartOrExit() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      this.restartOrExitHandler.bind(this)
    );
  },

  restartOrExitHandler(answer) {
    Validator(answer);
    (answer === '1' && Controller.gameStart()) || Controller.gameExit();
  },
};

module.exports = InputView;
