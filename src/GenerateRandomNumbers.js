const { Random } = require('@woowacourse/mission-utils');

const GenerateRandomNumbers = {
  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  },
};

module.exports = GenerateRandomNumbers;
