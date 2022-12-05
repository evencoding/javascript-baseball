const Validator = require('../src/Validator');

describe('숫자에 대한 예외 테스트', () => {
  test('입력에 공백이 포함되어 있다면 에러 발생', () => {
    expect(() => {
      Validator.throwErrorIfIncludesBlank('1 2 3');
    }).toThrow();
  });

  test('숫자가 아니라면 에러 발생', () => {
    expect(() => {
      Validator.throwErrorIfInvalidNumbers('123a');
    }).toThrow();
  });

  test('3자리가 아니라면 에러 발생', () => {
    expect(() => {
      Validator.throwErrorIfInvalidNumbers('1234');
    }).toThrow();
  });

  test('중복된 숫자가 있다면 에러 발생', () => {
    expect(() => {
      Validator.throwErrorIfInvalidNumbers('111');
    }).toThrow();
  });

  test('1부터 9까지의 숫자가 아니라면 에러 발생', () => {
    expect(() => {
      Validator.throwErrorIfInvalidNumbers('120');
    }).toThrow();
  });
});

describe('재시작 커맨드에 대한 예외 테스트', () => {
  test('입력에 공백이 포함되어 있다면 에러 발생', () => {
    expect(() => {
      console.log('ok');
      Validator.throwErrorIfIncludesBlank('1 2 3');
    }).toThrow();
  });

  test('입력값이 1 혹은 2가 아니라면 에러 발생', () => {
    expect(() => {
      Validator.throwErrorIfInvalidCommand('3');
    }).toThrow();
  });
});
