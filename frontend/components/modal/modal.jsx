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
import PinDeleteContainer from '../pins/pin_delete_container';
import { NavLink } from 'react-router-dom';

function Modal({modal, closeModal, currentUserId}) {
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
    case 'delete-pin':
      component = <PinDeleteContainer/>;
      break;
    default:
      return null;
  }

  const currentUrl = window.location.href;
  const onPinCreate = (currentUrl) => {
    const string = 'pin-builder';
    if (currentUrl.includes(string)) {
      return true;
    } else {
      return false
    };
  };

  if (onPinCreate(currentUrl)) {
    return (
      <NavLink to={`/users/${currentUserId}`}>
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
      </NavLink>
    );
  } else {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);