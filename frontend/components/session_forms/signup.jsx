import React from 'react'
import { withRouter } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: '',
            password: '',
            age: '',
            submitting: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.removeErrors();
    }


    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitting: true})
        const email = this.state.email;
        const emailArray = email.split('@');
        const username = emailArray[0];
        this.setState({ username: username}, () => {
            this.props.createNewUser(this.state)
                .then(() => this.props.closeModal())
        });
    }

    displayErrors() {
        return (
            <ul className="rendor-errors">
                {this.props.errors.map((error1, idx1) => {
                    return <li key={idx1}>{error1}</li>
                })}
            </ul>
        )
    }

    showModal() {
        state = {
            show: false,
        };
        showModal = (e) => {
            this.setState({ show: true });
        };
    }

    render () {
        const { openModal, closeModal } = this.props;
        return (
            <div className="signup-form-container">
                    <div onClick={this.props.closeModal} className="close-x"><MdClose size={25}/></div>
                <div className="auth1-logo-wrapper">
                    <img className="dan-logo2" src={window.dLogo}/>
                </div>
                <div className="auth-title">
                    <h2>Welcome to Danterest</h2>
                    <h3>Find new ideas to try</h3>
                </div>
                <form className="signup-form-box" onSubmit={this.handleSubmit}>
                <br/>
                {this.displayErrors()}
                    <div className="signup-form">
                        <label>
                            <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            placeholder="Email"
                            />
                        </label>
                        <label>
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                            />
                        </label>
                        <label>
                            <input
                            type="number"
                            value={this.state.age}
                            onChange={this.handleInput('age')}
                            placeholder="Age"
                            />
                        </label>
                        <div className="auth-btn" onClick={this.handleSubmit}>Sign Up</div>
                        <div className="auth-footer">
                            <h6>By continuing, you agree to Danterest's Terms of</h6>
                            <h6>Service, Privacy policy.</h6>
                        </div>
                        <div className="already-member" onClick={() => openModal('login')}>
                            Already a member? Log in</div>
                    </div>
                </form>
            </div>
        );
    }
};

export default withRouter(Signup);