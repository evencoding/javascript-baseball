const { Random } = require('@woowacourse/mission-utils');
const { GAME_VALUE } = require('../constants');

const RandomNumberGenerator = {
  generateRandomNumber() {
    return Random.pickNumberInRange(GAME_VALUE.MIN_RANDOM_NUMBER, GAME_VALUE.MAX_RANDOM_NUMBER);
  },
};

module.exports = RandomNumberGenerator;
