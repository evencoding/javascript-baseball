class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getCarInfo() {
    return {
      name: this.#name,
      position: this.#position,
    };
  }

  move() {
    this.#position += 1;
  }
}

module.exports = Car;
