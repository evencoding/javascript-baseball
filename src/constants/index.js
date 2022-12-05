MESSAGE = Object.freeze({
  ASK_NUBMER: '숫자를 입력해주세요 : ',
  ASK_RESTART_OR_EXIT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  GAME_START: '숫자 야구 게임을 시작합니다.',
  WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

RESULT = Object.freeze({
  both: ({ ball, strike }) => `${ball}볼 ${strike}스트라이크`,
  NOTHING: '낫싱',
  strike: (strike) => `${strike}스트라이크`,
  ball: (ball) => `${ball}볼`,
});

ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER: '1부터 9까지의 수 3개를 입력해주세요.',
  INVALID_COMMAND: '1 또는 2를 입력해주세요.',
  INCLUDES_BLANK: '공백은 입력할 수 없습니다.',
  DUPLICATED_NUMBER: '중복된 숫자는 입력할 수 없습니다.',
});

GAME_VALUE = Object.freeze({
  MAX_NUMBER: 9,
  MIN_NUMBER: 1,
  LENGTH: 3,
});

COMMAND = Object.freeze({
  RESTART: '1',
  EXIT: '2',
});

module.exports = { MESSAGE, ERROR_MESSAGE, COMMAND, RESULT, GAME_VALUE };
