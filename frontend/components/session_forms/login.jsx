import React from 'react'

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
        this.props.closeModal();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then( () => this.props.history.push('/'));
    }
    demoSubmit() {
        this.props.login(this.demo)
        .then( () => this.props.history.push('/'));
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
                <h2>Welcome to Danterest</h2>
                {this.displayErrors()}
                <form className="login-form-box" onSubmit={this.handleSubmit}>
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
                </form>
            </div>
        );
    }
};

export default Login;