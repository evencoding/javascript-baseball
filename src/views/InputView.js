const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  askNumbers(callback) {
    Console.readLine('숫자를 입력해주세요 : ', callback);
  },
};

module.exports = InputView;
