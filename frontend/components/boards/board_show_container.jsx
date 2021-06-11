import BoardShow from "./board_show";
import { fetchBoard, deleteBoard } from "../../actions/board_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    // user: state.entities.users[ownProps.match.params.userId],
    board: state.entities.boards[ownProps.match.params.userId.boardId],
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBoard: (userId, boardId) => dispatch(fetchBoard(userId, boardId)),
    deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);