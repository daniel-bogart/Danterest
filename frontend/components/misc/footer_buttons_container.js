import { connect } from 'react-redux';
import FooterButton from './footer_buttons';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  // currentUser: state.entities.users[state.session.id],
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  openModal: (formType) => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterButton);