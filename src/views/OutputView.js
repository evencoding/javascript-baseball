const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
};

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.START);
  },
};

module.exports = OutputView;
