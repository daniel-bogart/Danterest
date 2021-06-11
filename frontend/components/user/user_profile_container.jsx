import UserProfile from "./user_profile";
import { connect } from 'react-redux';
import { receiveUser } from '../../actions/user_actions';
import { createrNewBoard } from '../../actions/board_actions';
import { removeErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    // user: state.entities.users[state.session.id],
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createNewBoard: (board) => dispatch(createNewBoard(board)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
