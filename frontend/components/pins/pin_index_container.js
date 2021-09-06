import PinIndex from "./pin_index";
import { fetchAllPins } from "../../actions/pin_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    pins: Object.values(state.entities.pins),
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);