import PinShow from "./pin_show";
import { fetchPin, deletePin } from "../../actions/pin_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.user,
    boards: Object.values(state.entities.boards),
    pin: state.entities.pins[ownProps.match.params.pinId],
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId)),
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    deletePin: (pinId) => dispatch(deletePin(pinId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);