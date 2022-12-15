const ERROR_MESSAGE = {
  INVALID_CARS_NAME: '자동차 이름은 1자 이상 5자로 쉼표(,)로 구분하여 입력해주세요.',
  INVALID_TRY_COUNT: '시도 횟수는 1 이상의 정수로 입력해주세요.',
};

const Validator = {
  throwErrorIfInvalidCarsName(carsName) {
    const regex = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5}(, *[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5})*$/;
    if (!regex.test(carsName)) throw new Error(ERROR_MESSAGE.INVALID_CARS_NAME);
  },

  throwErrorIfInvalidTryCount(count) {
    const regex = /^[1-9][0-9]*$/;
    if (!regex.test(count)) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  },
};

module.exports = Validator;
