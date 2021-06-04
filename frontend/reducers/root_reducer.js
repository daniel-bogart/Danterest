import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer'
import usersReducer from "./users_reducer.js";
import modalReducer from "./modal_reducer";

export default combineReducers({
  session: sessionReducer,
  errors: sessionErrorsReducer,
  users: usersReducer,
  modal: modalReducer
});