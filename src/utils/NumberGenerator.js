const { Random } = require('@woowacourse/mission-utils');

const NumberGenerator = {
  generateRandomNumbers: () => {
    const numbers = new Set();

    while (numbers.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      numbers.add(number);
    }

    return [...numbers];
  },
};

module.exports = NumberGenerator;
