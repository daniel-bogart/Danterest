import React from 'react';
import BoardCreate from './board_create';
import { createNewBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mSTP = (state) => {
  return {
    errors: state.errors,
    userId: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createNewBoard: (board, userId) => dispatch(createNewBoard(board, userId)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mSTP, mDTP)(BoardCreate);