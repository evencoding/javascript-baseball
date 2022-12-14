const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_NUMBERS: '숫자를 입력해주세요 : ',
  ASK_RETRY_COMMAND: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};

const InputView = {
  askNumbers(callback) {
    Console.readLine(MESSAGE.ASK_NUMBERS, callback);
  },

  askRetryCommand(callback) {
    Console.readLine(MESSAGE.ASK_RETRY_COMMAND, callback);
  },
};

module.exports = InputView;
