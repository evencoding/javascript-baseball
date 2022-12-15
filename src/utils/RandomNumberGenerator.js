const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = {
  generateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  },
};

module.exports = RandomNumberGenerator;
