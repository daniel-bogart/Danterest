import React from 'react';
import { createNewUser, login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Nav from './navbar';
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchAllPins, fetchUserPins } from '../../actions/pin_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  session: state.session,
  pins: state.entities.pins,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  login: formUser => dispatch(login(formUser)),
  logout: formUser => dispatch(logout(formUser)),
  fetchUser: userId => {
    return dispatch(fetchUser(userId));
  },
  closeModal: () => dispatch(closeModal()),
  openModal: (formType) => dispatch(openModal(formType)),
  fetchAllPins: () => dispatch(fetchAllPins())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);