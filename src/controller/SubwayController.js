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
    // validate feature

    this.#randerRoutePage();
  }

  #randerRoutePage() {
    OutputView.printRoutePage();

    this.#inputFeature(FEATURES.ROUTE);
  }

  #validateRouteFeature(feature) {
    // validate feature

    this.#inputStartStation();
  }

  #inputStartStation() {
    InputView.askStartStation(this.#validateStartStation.bind(this));
  }

  #validateStartStation(station) {
    // validate

    console.log(station);
    this.#inputDestination();
  }

  #inputDestination() {
    InputView.askDestination(this.#validateDestination.bind(this));
  }

  #validateDestination(station) {
    // validate

    console.log(station);
  }
}

module.exports = SubwayController;
