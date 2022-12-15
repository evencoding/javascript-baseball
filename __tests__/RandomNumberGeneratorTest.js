const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = require('../src/utils/RandomNumberGenerator');

const mockRandom = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

test('0~9까지의 랜덤 숫자를 반환한다.', () => {
  const randoms = [0, 3, 9];
  const expected = [0, 3, 9];

  mockRandom(randoms);

  const actual = randoms.map(() => RandomNumberGenerator.generateRandomNumber());

  expect(actual).toEqual(expected);
});
