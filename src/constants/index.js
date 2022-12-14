const PROCESS = {
  WIN: true,
  FAIL: false,
};

const COMMAND = {
  RESTART: '1',
  EXIT: '2',
};

const REGEX = {
  PLAYER_NUMBER: /^[1-9]{3}$/,
  RETRY_COMMAND: /^[12]$/,
};

const RESULT_MESSAGES = {
  strikeAndBall: (strike, ball) => `${ball}볼 ${strike}스트라이크`,
  onlyStrike: (strike) => `${strike}스트라이크`,
  onlyBall: (ball) => `${ball}볼`,
  NOTHING: '낫싱',
};

module.exports = {
  REGEX,
  GAME_VALUES,
  RESULT_MESSAGES,
  PROCESS,
  COMMAND,
};
