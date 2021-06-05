import React from 'react'
import { withRouter } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.demoSubmit = this.demoSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = {
            email: 'demo@danterest.com',
            password: '123123'
        }
    }

    componentDidMount() {
        this.props.removeErrors();
        // this.props.closeModal();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.login(user)
            .then (() => this.props.closeModal());
    }
    demoSubmit() {
        this.props.login(this.demo)
            .then(() => this.props.closeModal());
    }

    displayErrors() {
        return (
            <ul className="rendor-errors">
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        )
    }

    render () {

        const { openModal, closeModal } = this.props;
        return (
            <div className="login-form-container">
                <div onClick={this.props.closeModal} className="close-x"><MdClose size={25}/></div>
                <div className="auth1-logo-wrapper">
                    <img className="dan-logo2" src={window.dLogo}/>
                </div>
                <h2 className="auth-title">Welcome to Danterest</h2>
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                    
                {this.displayErrors()}
                    <div className="login-form">
                        <div className="session-form-inputs">
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
                        </div>
                        <div className="auth-btn" onClick={this.handleSubmit}>Log in</div>
                        <p className="or">OR</p>
                        <div onClick={this.demoSubmit} className="demo-user">
                            Continue as Demo User
                        </div>
                        <div className="auth-footer">
                            <h6>By continuing, you agree to Danterest's Terms of</h6>
                            <h6>Service, Privacy policy.</h6>
                        </div>
                        <div className="need-account" onClick={() => openModal('signup')}>
                            Not on Danterest yet? Sign up</div>
                    </div>
                </form>
            </div>
        );
    }
};

export default withRouter(Login);