const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printAllStrike() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },

  printResult({ strike, ball }) {
    if (strike > 0 && ball > 0) Console.print(`볼${ball} 스트라이크${strike}`);
    else if (strike + ball === 0) Console.print('낫싱');
    else if (strike > 0) Console.print(`스트라이크${strike}`);
    else if (ball > 0) Console.print(`볼${ball}`);
  },
};

module.exports = OutputView;
