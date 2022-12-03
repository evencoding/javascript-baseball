const { Random } = require('@woowacourse/mission-utils');
const { GAME } = require('./constants');

const GenerateRandomNumbers = {
  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(GAME.MIN, GAME.MAX, GAME.LENGTH);
  },
};

module.exports = GenerateRandomNumbers;
