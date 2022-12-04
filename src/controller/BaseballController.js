const OutputView = require('../views/OutputView');

class BaseballController {
  gameStart() {
    OutputView.printGameStartMessage();
  }
}

module.exports = BaseballController;
