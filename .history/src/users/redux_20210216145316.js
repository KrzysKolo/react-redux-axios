import { reducer } from "redux-form";

const FETCH_USERS_REQUESTED = 'users/FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEDED = 'users/FETCH_USERS_SUCCEDED';
const FETCH_USERS_FAILED = 'users/FETCH_USERS_FAILED';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false
};

export const fetchUsers = () => {

}

export default reducer = (state = INITIAL_STATE, action) => {
switch(action.type) {
  case FETCH_USERS_REQUESTED:
    return state = {
      ...state,
      isLoading: true
    };
  case FETCH_USERS_SUCCEDED:
    return {
      ...state,
      isLoading: false,
      users: action.payload
    }
  default:
    return state;
}
};