import { combineReducers } from 'redux';
import usersReducer from './users/redux';
// import reducer2 from './ddd/redux

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;