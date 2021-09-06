import * as UserAPIUtils from '../utils/user';
import { receiveCurrentUser, RECEIVE_CURRENT_USER } from './session_actions';

export const RECEIVE_ALL_USERS = "RECIEVE_ALL_USERS";

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

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

export const fetchAllUsers = () => dispatch => UserAPIUtils.fetchAllUsers()
  .then(users => dispatch(receiveAllUsers(users)));

