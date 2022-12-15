const Validator = require('../utils/Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class CarController {
  startGame() {
    OutputView.printGameStartMessage();

    this.#inputCarsName();
  }

  #inputCarsName() {
    InputView.askCarsName(this.#validateCarsName.bind(this));
  }

  #validateCarsName(carsName) {
    try {
      Validator.throwErrorIfInvalidCarsName(carsName);
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      this.#inputCarsName();
    }

    this.#onInputCarsName(carsName);
  }

  #onInputCarsName(carsName) {
    // Handle CarsName

    this.#inputTryCount();
  }

  #inputTryCount() {
    InputView.askTryCount(this.#validateTryCount.bind(this));
  }

  #validateTryCount(tryCount) {
    try {
      Validator.throwErrorIfInvalidTryCount(tryCount);
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      this.#inputTryCount();
    }

    this.#onInputTryCount(tryCount);
  }

  #onInputTryCount(tryCount) {}
}

module.exports = CarController;
