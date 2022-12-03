const Controller = require('./controller/Controller');

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  play() {
    this.#controller.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
