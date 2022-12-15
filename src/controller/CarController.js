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

  #onInputCarsName(carsName) {}
}

module.exports = CarController;
