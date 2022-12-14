class BaseballReferee {
  #playerNumbers;

  constructor(playerNumbers) {
    this.#playerNumbers = playerNumbers;
  }

  getStrikeAndBallCount(computerNumbers) {
    const sameNumberCount = this.#getSameNumberCount(computerNumbers);
    const strikeCount = this.#getStrikeCount(computerNumbers);
    const ballCount = this.#getBallCount(sameNumberCount, strikeCount);

    return { strikeCount, ballCount };
  }

  #getSameNumberCount(computerNumbers) {
    return this.#playerNumbers.reduce((sameNumberCount, number) => {
      if (computerNumbers.includes(number)) sameNumberCount++;

      return sameNumberCount;
    }, 0);
  }

  #getStrikeCount(computerNumbers) {
    return this.#playerNumbers.reduce((strikeCount, number, index) => {
      if (computerNumbers[index] === number) strikeCount++;

      return strikeCount;
    }, 0);
  }

  #getBallCount(sameNumberCount, strikeCount) {
    return sameNumberCount - strikeCount;
  }
}

module.exports = BaseballReferee;
