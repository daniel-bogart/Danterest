import {
  postUser,
  deleteSession,
  postSession
} from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
})


export const createNewUser = formUser => dispatch => postUser(formUser)
  .then((user) => dispatch(receiveCurrentUser(user)), (error) => dispatch(receiveErrors(error.responseJSON)));
  // .fail(error => (dispatch(receiveErrors(error.responseJSON))));

export const login = formUser => dispatch => postSession(formUser)
  .then((user) => dispatch(receiveCurrentUser(user)), (error) => dispatch(receiveErrors(error.responseJSON)));
  // .fail(error => (dispatch(receiveErrors(error.responseJSON))));


export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));

