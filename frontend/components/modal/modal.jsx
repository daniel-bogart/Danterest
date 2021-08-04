import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_container';
import SignupFormContainer from '../session_forms/signup_container';
import BoardCreateContainer from "../boards/board_create_container";
import BoardEditContainer from "../boards/board_edit_container";
import BoardDeleteContainer from '../boards/board_delete_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'create-board':
      component = <BoardCreateContainer/>;
      break;
    case 'edit-board':
      component = <BoardEditContainer/>;
      break;
    case 'delete-board':
      component = <BoardDeleteContainer/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);