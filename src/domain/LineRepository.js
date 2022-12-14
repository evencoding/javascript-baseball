class LineRepository {
  #lines;

  constructor() {
    this.initLines();
  }

  initLines() {
    this.#lines = [];
  }

  getLines() {
    return this.#lines;
  }

  addLine(line) {
    this.#lines.push(line);
  }

  deleteLineByName(name) {
    this.#lines = this.#lines.filter((line) => line.getName() !== name);
  }

  deleteAll() {
    this.initLines();
  }
}
