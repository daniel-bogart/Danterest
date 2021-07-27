import React from 'react';
import { createNewUser, login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Nav from './navbar';
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  login: formUser => dispatch(login(formUser)),
  logout: formUser => dispatch(logout(formUser)),
  fetchUser: userId => {
    return dispatch(fetchUser(userId));
  },
  closeModal: () => dispatch(closeModal()),
  openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);