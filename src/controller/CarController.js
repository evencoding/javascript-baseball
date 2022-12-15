const { Console } = require('@woowacourse/mission-utils');

const CarGame = require('../service/CarGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../utils/Validator');
const { REGEX } = require('../constants');

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
    const cars = carsName.replace(REGEX.SPACE, '').split(',');
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
    this.#carGame.startRacing(tryCount);

    this.#printResult();
  }

  #printResult() {
    const { movingInfo, winner } = this.#carGame.getGameResult();

    OutputView.printGameResult(movingInfo, winner);

    this.#exitGame();
  }

  #exitGame() {
    Console.close();
  }
}

module.exports = CarController;
