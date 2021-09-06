import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import PinEdit from './pin_edit';
import { fetchPin, deletePin } from "../../actions/pin_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  console.log(ownProps);
  return {

  };
};

export default connect(mSTP, {
  closeModal, openModal, fetchPin, deletePin, fetchAllUsers
})(PinEdit);