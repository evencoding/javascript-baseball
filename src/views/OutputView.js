const { Console } = require('@woowacourse/mission-utils');

const SCREEN = {
  MAIN: `## 메인 화면
1. 경로 조회
Q. 종료`,
};

const OutputView = {
  printMainPage() {
    Console.print(SCREEN.MAIN);
  },
};

module.exports = OutputView;
