const { ERROR_MESSAGE, REGEX, GAME } = require('./constants');

const Validator = {
  throwError(message) {
    throw new Error(message);
  },

  checkNumbersValidate(answer) {
    this.throwErrorIfIncludesBlank(answer);
    if (!REGEX.NUMBER.test(answer)) this.throwError(ERROR_MESSAGE.RANGE);
    if (answer.length !== GAME.LENGTH) this.throwError(ERROR_MESSAGE.LENGTH);
    if (new Set(answer).size < GAME.LENGTH) {
      this.throwError(ERROR_MESSAGE.DUPLICATE);
    }
  },

  checkRestartValidate(answer) {
    this.throwErrorIfIncludesBlank(answer);
    if (answer !== GAME.RESTART && answer !== GAME.EXIT)
      this.throwError(ERROR_MESSAGE.RESTART);
  },

  throwErrorIfIncludesBlank(answer) {
    if (answer.includes(' ')) this.throwError(ERROR_MESSAGE.BLANK);
  },
};

module.exports = Validator;
