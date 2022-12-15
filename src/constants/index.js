const GAME_VALUE = {
  CONDITION_FOR_MOVING: 4,
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
};

const REGEX = {
  CAR_NAME: /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5}(, *[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,5})*$/,
  TRY_COUNT: /^[1-9][0-9]*$/,
  SPACE: /\s/g,
};

module.exports = {
  REGEX,
  GAME_VALUE,
};
