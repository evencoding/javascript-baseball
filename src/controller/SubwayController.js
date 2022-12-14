const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const FEATURES = {
  MAIN: 'main',
  ROUTE: 'route',
};

class SubwayController {
  randerMainPage() {
    OutputView.printMainPage();
    this.#inputFeature(FEATURES.MAIN);
  }

  #inputFeature(type) {
    if (type === FEATURES.MAIN) {
      InputView.askFeature(this.#validateMainFeature.bind(this));
      return;
    }
    InputView.askFeature(this.#validateRouteFeature.bind(this));
  }

  #validateMainFeature(feature) {
    console.log(feature);

    this.#randerRoutePage();
  }

  #randerRoutePage() {
    OutputView.printRoutePage();
  }

  #validateRouteFeature(feature) {}
}

module.exports = SubwayController;
