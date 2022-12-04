const Validator = {
  throwError(message) {
    throw new Error(message);
  },

  throwErrorIfInvalidNumbers(userNumbers) {
    const regex = /^[1-9]{3}$/;
    this.throwErrorIfIncludesBlank(userNumbers);
    if (!regex.test(userNumbers)) {
      this.throwError('1부터 9까지의 수 3개를 입력해주세요.');
    }
    if (new Set(userNumbers.split('')).size < 3) {
      this.throwError('중복된 숫자는 입력할 수 없습니다.');
    }
  },

  throwErrorIfInvalidCommand(command) {
    const regex = /^[12]$/;
    this.throwErrorIfIncludesBlank(command);
    if (!regex.test(command)) {
      this.throwError('1 또는 2를 입력해주세요.');
    }
  },

  throwErrorIfIncludesBlank(inputValue) {
    if (inputValue.includes(' ')) {
      this.throwError('공백은 입력할 수 없습니다.');
    }
  },
};

module.exports = Validator;
