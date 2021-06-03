import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then( () => this.props.history.push('/UserProfile'));
    }

    render () {
        return (
            <div className="session-form">
                <h2>Login</h2>
                <form>
                    <label>Email:
                        <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                        type="text"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        );
    }
};

export default Login;