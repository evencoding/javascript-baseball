const BaseballController = require('./controller/BaseballController');

class App {
  #baseballCtrl;

  constructor() {
    this.#baseballCtrl = new BaseballController();
  }

  play() {
    this.#baseballCtrl.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
