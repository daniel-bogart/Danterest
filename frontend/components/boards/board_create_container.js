import React from 'react';
import BoardCreate from './board_create';
import { createNewBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => {
  return {
    user: ownProps.user,
    boards: Object.values(state.entities.boards),
    pin: state.entities.pins[ownProps.match.params.pinId],
    errors: state.errors,
    userId: state.session.id
  };
};

export default connect(mSTP, {
  closeModal, createNewBoard, removeErrors
})(BoardCreate);