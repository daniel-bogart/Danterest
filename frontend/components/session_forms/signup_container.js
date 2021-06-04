import React from 'react';
import { connect } from 'react-redux';
import { createNewUser, removeErrors } from '../../actions/session_actions';
import Signup from './signup';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    errors: state.errors,
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    removeErrors: () => dispatch(removeErrors()),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Log in
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);