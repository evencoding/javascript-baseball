const { ERROR_MESSAGE } = require('./constants');

const Validator = {
  throwError(message) {
    throw new Error(message);
  },

  throwErrorIfInvalidNumbers(userNumbers) {
    const regex = /^[1-9]{3}$/;
    this.throwErrorIfIncludesBlank(userNumbers);
    if (!regex.test(userNumbers)) {
      this.throwError(ERROR_MESSAGE.INVALID_NUMBER);
    }
    if (new Set(userNumbers.split('')).size < 3) {
      this.throwError(ERROR_MESSAGE.DUPLICATED_NUMBER);
    }
  },

  throwErrorIfInvalidCommand(command) {
    const regex = /^[12]$/;
    this.throwErrorIfIncludesBlank(command);
    if (!regex.test(command)) {
      this.throwError(ERROR_MESSAGE.INVALID_COMMAND);
    }
  },

  throwErrorIfIncludesBlank(inputValue) {
    if (inputValue.includes(' ')) {
      this.throwError(ERROR_MESSAGE.INCLUDES_BLANK);
    }
  },
};

module.exports = Validator;
