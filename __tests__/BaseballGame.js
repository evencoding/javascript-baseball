const { Random } = require('@woowacourse/mission-utils');

const BaseballGame = require('../src/BaseballGame');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    Random.pickNumberInRange.mockReturnValueOnce(number);
    return acc;
  }, Random.pickNumberInRange);
};

describe('BaseballGame 테스트', () => {
  const computerNumbers = [1, 2, 3];

  beforeEach(() => {
    mockRandoms(computerNumbers);
  });

  it('getStrikeCount 테스트', () => {
    const baseballGame = new BaseballGame();
    const userNumbers = [1, 2, 3];
    const strike = baseballGame.getStrikeCount(userNumbers);
    expect(strike).toBe(3);
  });

  it('getBallCount 테스트', () => {
    const baseballGame = new BaseballGame();
    const userNumbers = [1, 2, 3];
    const strike = baseballGame.getStrikeCount(userNumbers);
    const ball = baseballGame.getBallCount({ userNumbers, strike });
    expect(ball).toBe(0);
  });
});
