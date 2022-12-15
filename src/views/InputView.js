const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const MESSAGE = {
  ASK_CARS_NAME: '자동차 이름을 5자 이하 콤마로 구분하여 입력해주세요.\n',
};

const InputView = {
  askCarsName(callback) {
    Console.readLine(MESSAGE.ASK_CARS_NAME, callback);
  },
};

module.exports = InputView;
