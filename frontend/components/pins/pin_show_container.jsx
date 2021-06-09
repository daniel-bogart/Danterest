import PinShow from "./pin_show";
import { fetchPin, deletePin } from "../../actions/pin_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    deletePin: (pinId) => dispatch(deletePin(pinId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);