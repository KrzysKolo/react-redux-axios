
const COUNTER_INC = 'users/COUNTER_INC';
const COUNTER_DEC = 'users/COUNTER_DEC';
const COUNTER_RESET = 'users/COUNTER_RESET';

function add(payload) {
  return {
    type: 'COUNTER_ADD',
    payload
  }
}
export default add;