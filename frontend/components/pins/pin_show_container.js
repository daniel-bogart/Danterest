import PinShow from "./pin_show";
import { fetchPin, deletePin } from "../../actions/pin_actions";
import { connect } from "react-redux";
import { fetchAllBoards } from "../../actions/board_actions";
import { openModal } from "../../actions/modal_actions";
import { savePin } from "../../actions/pins_on_boards_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.user,
    boards: Object.values(state.entities.boards),
    pin: state.entities.pins[ownProps.match.params.pinId],
    session: state.session,
    userId: state.session.id
  };
};

export default connect(mapStateToProps, {
  fetchAllBoards, fetchPin, deletePin, openModal, savePin
})(PinShow);