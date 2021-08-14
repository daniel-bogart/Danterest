import * as UserAPIUtils from '../utils/user';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = userId => dispatch => UserAPIUtils.fetchUser(userId)
  .then(usersId => dispatch(receiveUser(usersId)));


export const updateUser = user => dispatch => UserAPIUtils.updateUser(user)
  .then( user => dispatch(receiveCurrentUser(user)));

