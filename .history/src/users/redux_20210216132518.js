
const COUNTER_INC = 'users/COUNTER_INC';
const COUNTER_DEC = 'users/COUNTER_DEC';
const COUNTER_RESET = 'users/COUNTER_RESET';

export function inc() {
  return {
    type: 'COUNTER_INC',

  }
}
export function dec() {
  return {
    type: 'COUNTER_DEC',

  }
}
export function reset() {
  return {
    type: 'COUNTER_RESET',

  }
}