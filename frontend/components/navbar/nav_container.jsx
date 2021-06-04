import React from 'react';
import { createNewUser, login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Nav from './navbar';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id]
  // currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  login: formUser => dispatch(login(formUser)),
  logout: formUser => dispatch(logout(formUser)),
  fetchUser: userId => {
    return dispatch(fetchUser(userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)