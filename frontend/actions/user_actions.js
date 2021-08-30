import * as UserAPIUtils from '../utils/user';
import { receiveCurrentUser, RECEIVE_CURRENT_USER } from './session_actions';

// export const RECEIVE_CURRENT_USER = "RECEIVE_USER";

export const receiveUser = user => {
  console.log("this is the user", user)
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const fetchUser = userId => dispatch => UserAPIUtils.fetchUser(userId)
  .then(usersId => dispatch(receiveUser(usersId)));


export const updateUser = (user, userId) => dispatch => UserAPIUtils.updateUser(user, userId)
  .then(user => dispatch(receiveCurrentUser(user)));

