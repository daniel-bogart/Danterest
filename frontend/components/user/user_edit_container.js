import UserEdit from "./user_edit";
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  console.log(state.session.id)
  return {
    userId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    session: state.session
  };
};

export default withRouter(connect(mapStateToProps, {updateUser, closeModal, fetchUser})(UserEdit));
