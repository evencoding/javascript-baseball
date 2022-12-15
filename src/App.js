const CarController = require('./controller/CarController');

class App {
  #carCtrl;

  constructor() {
    this.#carCtrl = new CarController();
  }

  play() {
    this.#carCtrl.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
