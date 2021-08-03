import React from 'react';
import BoardEdit from './board_edit';
import { editBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => {
  const tempPath = ownProps.location.pathname.split("/")
  const boardId = tempPath[tempPath.length -1]
  return {
    errors: state.errors,
    userId: state.session.id,
    boardId: boardId,
    board: state.entities.boards[boardId]
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    editBoard: (board, userId) => dispatch(editBoard(board, userId)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default withRouter(connect(mSTP, mDTP)(BoardEdit));