import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import PinEdit from './pin_edit';
import { fetchPin, deletePin } from "../../actions/pin_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { updatePin } from "../../actions/pin_actions";

const mSTP = (state, ownProps) => {
  const tempPath = ownProps.location.pathname.split("/")
  const pinId = tempPath[tempPath.length -1]
  return {
    userId: state.session.id,
    pinId: pinId,
    pin: state.entities.pins[pinId]
  };
};

export default withRouter(connect(mSTP, {
  closeModal, 
  openModal, 
  fetchPin, 
  deletePin, 
  fetchAllUsers,
  updatePin
})(PinEdit));