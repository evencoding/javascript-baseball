const MESSAGE = {
  NOT_NUMBER: '1~9 사이의 세자리 숫자를 입력해야 합니다.',
  HAS_DUPLICATE_NUMBER: '중복되지 않는 세자리 숫자를 입력해야 합니다.',
};

const Validator = {
  throwErrorIfInvalidNumbers(numbers) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(numbers)) throw new Error(MESSAGE.NOT_NUMBER);
    if (new Set(numbers).size !== 3) {
      throw new Error(MESSAGE.HAS_DUPLICATE_NUMBER);
    }
  },
};

module.exports = Validator;
