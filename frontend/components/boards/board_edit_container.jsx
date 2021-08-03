import React from 'react';
import BoardEdit from './board_edit';
import { editBoard } from '../../actions/board_actions';
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
    editBoard: (board, userId) => dispatch(editBoard(board, userId)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mSTP, mDTP)(BoardEdit);