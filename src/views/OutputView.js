const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
};

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.START);
  },

  printResult(resultMessage) {
    Console.print(resultMessage);
  },

  printWinningMessage() {
    Console.print(MESSAGE.WIN);
  },
};

module.exports = OutputView;
