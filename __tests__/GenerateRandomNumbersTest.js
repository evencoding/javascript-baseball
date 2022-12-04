const GenerateRandomNumbers = require('../src/GenerateRandomNumbers');

test('1에서 9까지 서로 다른 임의의 수 3개를 배열로 반환하는 기능 테스트', () => {
  const randomNumbers = GenerateRandomNumbers.generateRandomNumbers();
  expect(randomNumbers.length).toBe(3);
  expect(
    randomNumbers.every((number) => number >= 1 && number <= 9)
  ).toBeTruthy();
  expect(new Set(randomNumbers).size).toBe(3);
});
