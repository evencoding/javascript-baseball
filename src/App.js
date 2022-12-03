// const MissionUtils = require('@woowacourse/mission-utils');
const Controller = require('./controller');

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  play() {
    Controller.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
