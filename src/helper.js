import {
  MIN_WEIGHT, MAX_WEIGHT, TEETER_TOTTER_WIDTH, SHAPE_COUNT,
} from './constants';

export function generateID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return `${s4() + s4()}-${s4()}-${s4()}-${
    s4()}-${s4()}${s4()}${s4()}`;
}

export function generateRandomBlock() {
  const id = generateID();
  const type = Math.floor(Math.random() * SHAPE_COUNT);
  const weight = Math.floor(Math.random() * MAX_WEIGHT) + MIN_WEIGHT;
  // eslint-disable-next-line no-mixed-operators
  const offset = Math.floor(Math.random() * TEETER_TOTTER_WIDTH / 2) + 1;
  const height = weight * 8;

  return {
    id,
    type,
    weight,
    offset,
    height,
  };
}
