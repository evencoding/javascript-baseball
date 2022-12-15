const Car = require('../models/Car');
const { generateRandomNumber } = require('../utils/RandomNumberGenerator');

class CarGame {
  #carList;
  #count;

  constructor(cars) {
    this.#carList = cars.map((car) => new Car(car));
  }

  startRacing(tryCount) {
    this.#count = tryCount;

    for (let i = 0; i < this.#count; i++) {
      this.#carList.forEach((car) => this.#move(car));
    }
  }

  #move(car) {
    const randomNumber = generateRandomNumber();
    if (randomNumber >= 4) {
      car.move();
    }
  }

  getGameResult() {}
}

module.exports = CarGame;
