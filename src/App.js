const BaseballController = require('./controller/BaseballController');

class App {
  #baseballCtrl;

  constructor() {
    this.#baseballCtrl = new BaseballController();
  }

  play() {
    this.#baseballCtrl.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
