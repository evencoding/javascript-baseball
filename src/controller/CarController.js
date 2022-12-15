const CarGame = require('../service/CarGame');
const Validator = require('../utils/Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class CarController {
  #carGame;

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
    const cars = carsName.replace(/\s/g, '').split(',');
    this.#carGame = new CarGame(cars);

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

  #onInputTryCount(tryCount) {
    // Handle TryCount
    this.#carGame.startRacing(tryCount);

    this.#printResult();
  }

  #printResult() {
    const gameResult = this.#carGame.getGameResult();
  }
}

module.exports = CarController;
