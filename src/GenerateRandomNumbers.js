const { Random } = require('@woowacourse/mission-utils');

const GenerateRandomNumbers = {
  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const random = Random.pickNumberInRange(1, 9);
      if (computer.includes(random)) continue;
      computer.push(random);
    }

    return computer;
  },
};

module.exports = GenerateRandomNumbers;
