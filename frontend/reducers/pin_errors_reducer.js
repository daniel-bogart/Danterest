import {
  RECEIVE_PIN_ERRORS, 
  REMOVE_ERRORS 
} from "../actions/pin_actions";

const pinErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PIN_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default pinErrorsReducer;