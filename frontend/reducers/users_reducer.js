import { RECEIVE_CURRENT_USER, RECEIVE_USER } from "../actions/session_actions.js";


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log("redux user", action.user)
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_USER:
      console.log("redux user", action.user)
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;