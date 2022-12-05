const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT } = require('../constants');

const OutputView = {
  printGameStartMessage() {
    Console.print(MESSAGE.GAME_START);
  },

  printResult({ strike, ball }) {
    if (strike > 0 && ball > 0) Console.print(RESULT.both({ strike, ball }));
    else if (strike + ball === 0) Console.print(RESULT.NOTHING);
    else if (strike > 0) Console.print(RESULT.strike(strike));
    else if (ball > 0) Console.print(RESULT.ball(ball));
  },

  printWinMessage() {
    Console.print(MESSAGE.WIN);
  },
};

module.exports = OutputView;
