import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_container';
import SignupFormContainer from '../session_forms/signup_container';
import BoardCreateContainer from "../boards/board_create_container";
import BoardEditContainer from "../boards/board_edit_container";
import BoardDeleteContainer from '../boards/board_delete_container';
import UserEditContainer from '../user/user_edit_container';
import PinCreateContainer from '../pins/pin_create_container';
import PinSaved from '../misc/pin_saved_modals/pin_saved';
import AlreadySaved from '../misc/pin_saved_modals/already_saved';
import PinEditContainer from "../pins/pin_edit_container";

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
    case 'edit-user':
      component = <UserEditContainer/>;
      break;
    case 'create-pin':
      component = <PinCreateContainer/>;
      break;
    case 'saved-pin':
      component = <PinSaved/>;
      break;
    case 'already-saved-pin':
      component = <AlreadySaved/>;
      break;
    case 'edit-pin':
      component = <PinEditContainer/>;
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