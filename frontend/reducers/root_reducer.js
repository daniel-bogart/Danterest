import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import modalReducer from "./modal_reducer";
import entitiesReducer from "./entities_reducer";
import pinErrorsReducer from "./pin_errors_reducer";

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: sessionErrorsReducer,
  modal: modalReducer,
  pinErrors: pinErrorsReducer
});