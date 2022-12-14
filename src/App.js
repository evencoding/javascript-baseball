const SubwayController = require('./controller/SubwayController');

class App {
  #subwayCtrl;

  constructor() {
    this.#subwayCtrl = new SubwayController();
  }

  play() {
    this.#subwayCtrl.randerMainPage();
  }
}

const app = new App();
app.play();

module.exports = App;
