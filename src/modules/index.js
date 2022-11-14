const { Random } = require('@woowacourse/mission-utils');

const { ERROR_MESSAGE, GAME_VALUE } = require('../constants');

const getRandomNumbers = (size, start, end) => {
  let randomNumbers = [];
  while (randomNumbers.length < size) {
    const number = Random.pickNumberInRange(start, end);
    if (randomNumbers.includes(number)) continue;
    randomNumbers.push(number);
  }

  return randomNumbers.join('');
};

// 모두 함수 이름만 봤을 때는 특정 조건을 만족하는지 판별해 주는 함수 같은데,
// 실제로는 특정 조건을 만족하는지의 여부보다는
// 만족하지 않을 경우에만 에러를 던지는 함수
// throwErrorIfInvalidRangeNumber()
const isValidRangeNumber = (userNumbers) => {
  const regex = /^[1-9]{3}$/;
  if (!regex.test(userNumbers)) {
    throw ERROR_MESSAGE.invalidValue;
  }
};

// throwErrorIfHaveSameNumber()
const haveSameNumber = (userNumbers) => {
  if (new Set([...userNumbers]).size < 3) {
    throw ERROR_MESSAGE.duplicate;
  }
};

const getStrikeCount = (userNumbers, computerNumbers) => {
  return [...userNumbers].filter((num, i) => num === computerNumbers[i]).length;
};

const getSameNumCount = (userNumbers, computerNumbers) => {
  return [...userNumbers].filter((num) => computerNumbers.includes(num)).length;
};

const getGameResultMessage = ({ strike, ball }) => {
  if (strike === 0 && ball === 0) {
    return '낫싱';
  }
  // https://github.com/airbnb/javascript#comparison--shortcuts
  // Use shortcuts for booleans, but explicit comparisons for strings and numbers.
  // strike > 0 && ball > 0 으로 갔어야 함
  if (strike && ball) {
    return `${ball}볼 ${strike}스트라이크`;
  }
  if (strike) {
    return `${strike}스트라이크`;
  }
  if (ball) {
    return `${ball}볼`;
  }
};

const isValidRestartInputValue = (inputValue) => {
  if (![GAME_VALUE.restart, GAME_VALUE.exit].includes(inputValue)) {
    throw ERROR_MESSAGE.invalidRestartValue;
  }
};

module.exports = {
  isValidRestartInputValue,
  getGameResultMessage,
  getSameNumCount,
  getStrikeCount,
  haveSameNumber,
  isValidRangeNumber,
  getRandomNumbers,
};
