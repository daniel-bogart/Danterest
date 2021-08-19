import PinShow from "./pin_show";
import { fetchPin, deletePin } from "../../actions/pin_actions";
import { connect } from "react-redux";
import { fetchAllBoards } from "../../actions/board_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.user,
    boards: Object.values(state.entities.boards),
    pin: state.entities.pins[ownProps.match.params.pinId],
    session: state.session,
    userId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId)),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    deletePin: (pinId) => dispatch(deletePin(pinId)),
    openModal: (formType) => dispatch(openModal(formType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);