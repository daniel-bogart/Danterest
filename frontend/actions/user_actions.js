import * as Utils from '../utils/user';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = userId => {
  return dispatch => {
    return Utils.fetchUser(userId)
      .then(usersId => dispatch(receiveUser(usersId)));
  };
};
