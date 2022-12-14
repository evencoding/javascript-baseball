const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_NUMBERS: '숫자를 입력해주세요 : ',
};

const InputView = {
  askNumbers(callback) {
    Console.readLine(MESSAGE.ASK_NUMBERS, callback);
  },
};

module.exports = InputView;
