import BoardShow from "./board_show";
import { fetchBoard, deleteBoard, fetchAllBoards } from "../../actions/board_actions";
import { fetchAllPins } from "../../actions/pin_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal } from "../../actions/modal_actions";
import { fetchPinsOnBoard } from "../../actions/pins_on_boards_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    session: state.session,
    userId: state.session.id
  };
};

export default withRouter(connect(mapStateToProps, {
  fetchAllBoards,
  openModal,
  fetchBoard,
  deleteBoard,
  fetchPinsOnBoard
})(BoardShow));