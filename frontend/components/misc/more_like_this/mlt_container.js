import MoreLikeThis from './mlt_container';
import { fetchBoard, deleteBoard, fetchAllBoards } from "../../../actions/board_actions";
import { fetchAllPins } from "../../actions/pin_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    // user: state.entities.users[ownProps.match.params.userId],
    board: state.entities.boards[ownProps.match.params.boardId],
    session: state.session,
    userId: state.session.id
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     openModal: (formType) => dispatch(openModal(formType)),
//     fetchBoard: (userId, boardId) => dispatch(fetchBoard(userId, boardId)),
//     deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId))
//   };
// };

export default withRouter(connect(mapStateToProps, {
  fetchAllBoards,
  openModal,
  fetchBoard,
  deleteBoard,
})(MoreLikeThis));