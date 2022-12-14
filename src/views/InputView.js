const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_FEATURE: '\n## 원하는 기능을 선택하세요.\n',
  ASK_START_STATION: '\n## 출발역을 입력하세요.\n',
  ASK_DESTINATION: '\n## 도착역을 입력하세요.\n',
};

const InputView = {
  askFeature(callback) {
    Console.readLine(MESSAGE.ASK_FEATURE, callback);
  },

  askStartStation(callback) {
    Console.readLine(MESSAGE.ASK_START_STATION, callback);
  },

  askDestination(callback) {
    Console.readLine(MESSAGE.ASK_DESTINATION, callback);
  },
};

module.exports = InputView;
