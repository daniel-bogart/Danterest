import BoardShow from "./board_show";
import { fetchBoard, deleteBoard } from "../../actions/board_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    // user: state.entities.users[ownProps.match.params.userId],
    board: state.entities.boards[ownProps.match.params.boardId],
    session: state.session,
    userId: state.session.id,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBoard: (userId, boardId) => dispatch(fetchBoard(userId, boardId)),
    deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));