const { Random } = require('@woowacourse/mission-utils');
const { GAME_VALUE } = require('./constants');

const GenerateRandomNumbers = {
  generateRandomNumbers() {
    const computer = [];
    while (computer.length < GAME_VALUE.LENGTH) {
      const random = Random.pickNumberInRange(
        GAME_VALUE.MIN_NUMBER,
        GAME_VALUE.MAX_NUMBER
      );
      if (computer.includes(random)) continue;
      computer.push(random);
    }

    return computer;
  },
};

module.exports = GenerateRandomNumbers;
