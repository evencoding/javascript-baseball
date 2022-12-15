const Validator = require('../src/utils/Validator');

test.each([',b,c,d,e', 'aaaaaa,b,c,d,e', '#$3'])(
  '1자 이상 5자 이하의 영|한|숫자를 쉼표(,)로 구분하여 입력하지 않으면 에러를 던진다.',
  (carsName) => {
    expect(() => Validator.throwErrorIfInvalidCarsName(carsName)).toThrow();
  }
);

test.each(['a', '#', '한글'])('양의 정수가 입력되지 않으면 에러를 던진다.', (tryCount) => {
  expect(() => Validator.throwErrorIfInvalidTryCount(tryCount)).toThrow();
});
