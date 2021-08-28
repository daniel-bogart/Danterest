import React from 'react';
import { connect } from "react-redux"
import PinCreate from "./pin_create";
import { savePin } from "../../actions/pins_on_boards_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchAllBoards } from "../../actions/board_actions";
import { createPin } from "../../actions/pin_actions";
import { fetchPin, deletePin } from '../../utils/pin';

const mSTP = (state, ownProps) => {
  console.log("---PIN----", state.entities.pins[ownProps.match.params.pinId])
  return {
    currentUser: state.entities.users[state.session.id],
    user: ownProps.user,
    pin: state.entities.pins[ownProps.match.params.pinId],
    pins: Object.values(state.entities.pins),
    session: state.session,
    boards: Object.values(state.entities.boards),
    userId: state.session.id
  };
};

export default connect(mSTP, {
  closeModal, 
  savePin, 
  fetchAllBoards, 
  createPin, 
  fetchPin, 
  deletePin, 
  openModal
})(PinCreate);