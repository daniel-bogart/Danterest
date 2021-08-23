import React from 'react';
import { connect } from "react-redux"
import PinCreate from "./pin_create";
import { savePin } from "../../actions/pins_on_boards_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchAllBoards } from "../../actions/board_actions";
import { createPin } from "../../actions/pin_actions";

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    pins: Object.values(state.entities.pins),
    session: state.session,
    boards: Object.values(state.entities.boards),
    userId: state.session.id
  };
};

export default connect(mSTP, {
  closeModal, savePin, fetchAllBoards, createPin
})(PinCreate);