import React from 'react';
import BoardDelete from './board_delete';
import { deleteBoard } from '../../actions/board_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
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
    openModal: (formType) => dispatch(openModal(formType)),
    closeModal: () => dispatch(closeModal()),
    deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default withRouter(connect(mSTP, mDTP)(BoardDelete));