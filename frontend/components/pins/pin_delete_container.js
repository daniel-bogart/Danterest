import PinDelete from "./pin_delete";
import { deletePin } from '../../actions/pin_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

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
  openModal,
  closeModal,
  deletePin
})(PinDelete));