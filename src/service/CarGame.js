const { GAME_VALUE } = require('../constants');
const Car = require('../models/Car');

const { generateRandomNumber } = require('../utils/RandomNumberGenerator');

class CarGame {
  #carList;
  #result;

  constructor(cars) {
    this.#carList = cars.map((car) => new Car(car));
  }

  startRacing(tryCount) {
    this.#result = Array.from({ length: tryCount }, () => []);

    for (let round = 0; round < tryCount; round++) {
      this.#carList.forEach((car) => this.#move(car));

      this.#saveRoundInfo(round);
    }
  }

  #move(car) {
    const randomNumber = generateRandomNumber();
    if (randomNumber >= GAME_VALUE.CONDITION_FOR_MOVING) {
      car.move();
    }
  }

  #saveRoundInfo(round) {
    this.#result = this.#carList.reduce((acc, cur) => {
      acc[round].push(cur.getCarInfo());

      return acc;
    }, this.#result);
  }

  getGameResult() {
    const winner = this.#getWinnerName();

    return { movingInfo: this.#result, winner };
  }

  #getWinnerName() {
    const maxPosition = this.#getMaxPosition();

    return this.#carList.reduce((winner, car) => {
      const { name, position } = car.getCarInfo();
      if (position === maxPosition) winner.push(name);

      return winner;
    }, []);
  }

  #getMaxPosition() {
    return this.#carList.reduce((maxPosition, car) => {
      const { position } = car.getCarInfo();

      return position > maxPosition ? position : maxPosition;
    }, 0);
  }
}

module.exports = CarGame;
