import { RECEIVE_CURRENT_USER, RECEIVE_USER } from "../actions/session_actions.js";
import { RECEIVE_ALL_USERS } from "../actions/user_actions";


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_ALL_USERS:
      return Object.assign({}, action.users)
    default:
      return state;
  }
};

export default usersReducer;