const { REGEX } = require('../constants');

const ERROR_MESSAGE = {
  INVALID_CARS_NAME: '자동차 이름은 1자 이상 5자로 쉼표(,)로 구분하여 입력해주세요.',
  INVALID_TRY_COUNT: '시도 횟수는 1 이상의 정수로 입력해주세요.',
};

const Validator = {
  throwErrorIfInvalidCarsName(carsName) {
    if (!REGEX.CAR_NAME.test(carsName)) {
      throw new Error(ERROR_MESSAGE.INVALID_CARS_NAME);
    }
  },

  throwErrorIfInvalidTryCount(count) {
    if (!REGEX.TRY_COUNT.test(count)) {
      throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
    }
  },
};

module.exports = Validator;
