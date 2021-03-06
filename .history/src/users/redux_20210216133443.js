
const COUNTER_INC = 'users/COUNTER_INC';
const COUNTER_DEC = 'users/COUNTER_DEC';
const COUNTER_RESET = 'users/COUNTER_RESET';

export function inc() {
  return {
    type: COUNTER_INC,

  }
}
export function dec() {
  return {
    type: COUNTER_DEC,

  }
}
export const reset = () => ({ type: COUNTER_RESET });

const INITIAL_STATE = {
  count: 0
}
function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case COUNTER_INC:
      return {
        ...state,
        counter: state.counter + 1
      };
    case COUNTER_DEC:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}

