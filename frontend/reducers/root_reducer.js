import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer'

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: sessionErrorsReducer
});