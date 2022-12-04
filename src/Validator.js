const Validator = {
  throwError(message) {
    throw new Error(message);
  },

  throwErrorIfInvalidNumbers(userNumbers) {
    const regex = /^[1-9]{3}$/;
    if (userNumbers.includes(' ')) {
      this.throwError('공백은 입력할 수 없습니다.');
    }
    if (!regex.test(userNumbers)) {
      this.throwError('1부터 9까지의 수 3개를 입력해주세요.');
    }
    if (new Set(userNumbers.split('')).size < 3) {
      this.throwError('중복된 숫자는 입력할 수 없습니다.');
    }
  },
};

module.exports = Validator;
