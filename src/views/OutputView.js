const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  GAME_START: '자동차 경주 게임을 시작합니다.',
};

const OutputView = {
  printErrorMessage(message) {
    Console.print(message);
  },

  printGameStartMessage() {
    Console.print(MESSAGE.GAME_START);
  },
};

module.exports = OutputView;
