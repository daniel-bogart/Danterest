import React from 'react';
import BoardCreate from './board_create';
import { createNewBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mSTP = ({errors}) => {
  return {
    errors,
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createNewBoard: (board) => dispatch(createNewBoard(board)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mSTP, mDTP)(BoardCreate);