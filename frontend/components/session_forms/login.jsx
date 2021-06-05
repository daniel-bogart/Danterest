import React from 'react'
import { withRouter } from 'react-router-dom';

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
        return (
            <div className="login-form-container">
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                <h2>Welcome to Danterest</h2>
                <br/>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                {this.displayErrors()}
                    <div className="login-form">
                        <label>Email:
                            <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password:
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Login</button>
                        <div onClick={this.demoSubmit} className="demo-user">
                            Continue as Demo User
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default withRouter(Login);