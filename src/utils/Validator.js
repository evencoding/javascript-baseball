const MESSAGE = {
  NOT_NUMBER: '1~9 사이의 세자리 숫자를 입력해야 합니다.',
  HAS_DUPLICATE_NUMBER: '중복되지 않는 세자리 숫자를 입력해야 합니다.',
  INVALID_COMMAND: '1 또는 2를 입력해야 합니다.',
};

const Validator = {
  throwErrorIfInvalidNumbers(numbers) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(numbers)) throw new Error(MESSAGE.NOT_NUMBER);
    if (new Set(numbers).size !== 3) {
      throw new Error(MESSAGE.HAS_DUPLICATE_NUMBER);
    }
  },

  throwErrorIfInvalidCommand(command) {
    const regex = /^[12]$/;
    if (!regex.test(command)) throw new Error(MESSAGE.INVALID_COMMAND);
  },
};

module.exports = Validator;
