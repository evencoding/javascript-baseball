const { Console } = require('@woowacourse/mission-utils');

const SCREEN = {
  MAIN: `## 메인 화면
1. 경로 조회
Q. 종료`,
  ROUTE: `\n## 경로 기준
1. 최단 거리
2. 최소 시간
B. 돌아가기`,
};

const OutputView = {
  printMainPage() {
    Console.print(SCREEN.MAIN);
  },

  printRoutePage() {
    Console.print(SCREEN.ROUTE);
  },
};

module.exports = OutputView;
