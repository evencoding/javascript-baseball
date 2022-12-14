const { Console } = require('@woowacourse/mission-utils');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const FEATURES = {
  MAIN: 'main',
  ROUTE: 'route',
};

class SubwayController {
  mainFeatureHandler = {
    1: this.#randerRoutePage.bind(this),
    Q: this.#exit.bind(this),
  };

  routeFeatureHandler = {
    1: this.#inputStartStation.bind(this),
    2: this.#inputStartStation.bind(this),
    B: this.randerMainPage.bind(this),
  };

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

    this.mainFeatureHandler[feature]();
  }

  #randerRoutePage() {
    OutputView.printRoutePage();

    this.#inputFeature(FEATURES.ROUTE);
  }

  #validateRouteFeature(feature) {
    // validate feature

    this.routeFeatureHandler[feature]();
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

  #exit() {
    Console.close();
  }
}

module.exports = SubwayController;
