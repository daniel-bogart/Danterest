import BoardIndex from "./board_index";
import { fetchAllBoards } from "../../actions/board_actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    boards: Object.values(state.entities.boards),
    session: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);