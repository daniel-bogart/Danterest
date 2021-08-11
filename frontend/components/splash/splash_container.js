import Splash from "./splash";
import { fetchAllPins } from "../../actions/pin_actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    pins: Object.values(state.entities.pins),
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);