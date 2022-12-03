const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants');

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.START);
  },

  printAllStrike() {
    Console.print(MESSAGE.CLEAR);
  },

  printResult({ strike, ball }) {
    if (strike > 0 && ball > 0) Console.print(MESSAGE.both({ ball, strike }));
    else if (strike + ball === 0) Console.print(MESSAGE.NOTHING);
    else if (strike > 0) Console.print(MESSAGE.strike(strike));
    else if (ball > 0) Console.print(MESSAGE.ball(ball));
  },
};

module.exports = OutputView;
