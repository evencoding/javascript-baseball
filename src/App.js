// const MissionUtils = require('@woowacourse/mission-utils');
const Controller = require('./controller');

class App {
  #controller;

  play() {
    this.#controller = new Controller();
    this.#controller.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
