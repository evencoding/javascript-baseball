MESSAGE = Object.freeze({
  ASK_NUMBERS: '숫자를 입력해주세요 : ',
  ASK_RESTART_OR_EXIT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  START: '숫자 야구 게임을 시작합니다.',
  CLEAR: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  NOTHING: '낫싱',
  both: ({ ball, strike }) => `볼${ball} 스트라이크${strike}`,
  strike: (strike) => `스트라이크${strike}`,
  ball: (ball) => `볼${ball}`,
});

ERROR_MESSAGE = Object.freeze({
  BLANK: '공백을 입력할 수 없습니다.',
  RANGE: '1~9 사이의 숫자를 입력해주세요.',
  RESTART: '1 또는 2를 입력해주세요.',
  LENGTH: '3자리의 숫자를 입력해주세요.',
  DUPLICATE: '중복된 숫자를 입력할 수 없습니다.',
});

GAME = Object.freeze({
  MIN: 1,
  MAX: 9,
  LENGTH: 3,
  RESTART: '1',
  EXIT: '2',
});

REGEX = Object.freeze({
  NUMBER: /^[1-9]+$/,
});

module.exports = {
  ERROR_MESSAGE,
  REGEX,
  GAME,
  MESSAGE,
};
