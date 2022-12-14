const OutputView = require('../views/OutputView');

class BaseballController {
  startGame() {
    OutputView.printStartMessage();
  }
}

module.exports = BaseballController;
