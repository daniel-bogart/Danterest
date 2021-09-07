import React from 'react';
import { connect } from "react-redux"
import PinCreate from "./pin_create";
import { savePin } from "../../actions/pins_on_boards_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchAllBoards } from "../../actions/board_actions";
import { createPin } from "../../actions/pin_actions";
import { fetchPin, deletePin } from '../../utils/pin';
import { fetchUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
  const sessionId = parseInt(state.session.id);
  return {
    currentUser: state.entities.users[sessionId],
    user: ownProps.user,
    pins: Object.values(state.entities.pins),
    session: state.session,
    boards: Object.values(state.entities.boards),
    userId: sessionId
  };
};

export default connect(mSTP, {
  closeModal, 
  savePin, 
  fetchAllBoards, 
  createPin, 
  fetchPin, 
  deletePin, 
  openModal,
  fetchUser
})(PinCreate);