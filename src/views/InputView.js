const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants');

const InputView = {
  askNumbers(callback) {
    Console.readLine(MESSAGE.ASK_NUBMER, callback);
  },

  askRestartOrExit(callback) {
    Console.readLine(MESSAGE.ASK_RESTART_OR_EXIT, callback);
  },
};

module.exports = InputView;
