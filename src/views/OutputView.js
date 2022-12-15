const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ERROR_FORM: `[ERROR] `,
  GAME_START: '자동차 경주 게임을 시작합니다.',
  GAME_RESULT: '\n실행 결과',
  resultForm: (name, position) => `${name}: ${'-'.repeat(position)}`,
  winnerForm: (name) => `최종 우승자: ${name}`,
};

const OutputView = {
  printErrorMessage(message) {
    Console.print(`${MESSAGE.ERROR_FORM}${message}`);
  },

  printGameStartMessage() {
    Console.print(MESSAGE.GAME_START);
  },

  printGameResult(movingInfoOfEachRound, winner) {
    Console.print(MESSAGE.GAME_RESULT);

    movingInfoOfEachRound.map((round) => {
      round.forEach((car) => Console.print(MESSAGE.resultForm(car.name, car.position)));
      Console.print('');
    });

    Console.print(MESSAGE.winnerForm(winner.join(', ')));
  },
};

module.exports = OutputView;
