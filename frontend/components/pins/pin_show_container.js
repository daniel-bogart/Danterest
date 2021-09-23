import PinShow from "./pin_show";
import { fetchPin, deletePin } from "../../actions/pin_actions";
import { connect } from "react-redux";
import { fetchAllBoards } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { savePin } from "../../actions/pins_on_boards_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { deletePinOnBoard } from "../../actions/pins_on_boards_actions";
import { updatePin } from "../../actions/pin_actions";
import { fetchBoard } from "../../actions/board_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.user,
    boards: Object.values(state.entities.boards),
    pin: state.entities.pins[ownProps.match.params.pinId],
    session: state.session,
    userId: state.session.id,
    users: state.entities.users
  };
};

export default connect(mapStateToProps, {
  deletePinOnBoard,
  fetchAllBoards, 
  fetchPin, 
  deletePin, 
  openModal,
  closeModal,
  savePin, 
  fetchAllUsers,
  updatePin,
  fetchBoard
})(PinShow);