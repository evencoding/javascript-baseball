const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_FEATURE: '\n## 원하는 기능을 선택하세요.\n',
};

const InputView = {
  askFeature(callback) {
    Console.readLine(MESSAGE.ASK_FEATURE, callback);
  },
};

module.exports = InputView;
