import { 
  RECEIVE_ALL_PINS, 
  RECEIVE_PIN, REMOVE_PIN
} from "../actions/pin_actions";


const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_PINS:
      return Object.assign({}, action.pins);
    case RECEIVE_PIN:
      nextState[action.pin.id] = action.pin;
      return nextState;
    case REMOVE_PIN:
      delete nextState[action.pinId];
      return nextState;
    default:
      return state;
  }
};

export default pinsReducer;