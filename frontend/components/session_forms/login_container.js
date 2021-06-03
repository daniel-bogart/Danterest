import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    removeErrors: () => dispatch(removeErrors()),

});

export default connect(null, mapDispatchToProps)(Login);