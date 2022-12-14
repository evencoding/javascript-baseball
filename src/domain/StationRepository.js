class StationRepository {
  #station;

  constructor() {
    this.#initStation();
  }

  #initStation() {
    this.#station = [];
  }

  getStation() {
    return this.#station;
  }

  addStation(station) {
    this.#station.push(station);
  }

  deleteStation(name) {
    this.#station = this.#station.filter(
      (station) => station.getName() !== name
    );
  }

  deleteAll() {
    this.#initStation();
  }
}
