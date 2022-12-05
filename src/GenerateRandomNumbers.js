const { Random } = require('@woowacourse/mission-utils');
const { GAME_VALUE } = require('./constants');

const GenerateRandomNumbers = {
  generateRandomNumbers() {
    const computer = new Set();
    while (computer.size < GAME_VALUE.LENGTH) {
      const random = Random.pickNumberInRange(
        GAME_VALUE.MIN_NUMBER,
        GAME_VALUE.MAX_NUMBER
      );
      computer.add(random);
    }

    return [...computer];
  },
};

module.exports = GenerateRandomNumbers;
