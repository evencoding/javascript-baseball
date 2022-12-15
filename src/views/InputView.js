const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_CARS_NAME: '\n자동차 이름을 5자 이하 콤마로 구분하여 입력해주세요.\n',
  ASK_TRY_COUNT: '\n시도할 횟수를 입력해주세요.\n',
};

const InputView = {
  askCarsName(callback) {
    Console.readLine(MESSAGE.ASK_CARS_NAME, callback);
  },

  askTryCount(callback) {
    Console.readLine(MESSAGE.ASK_TRY_COUNT, callback);
  },
};

module.exports = InputView;
