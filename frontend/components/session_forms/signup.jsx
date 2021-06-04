import React from 'react'

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

    componentDidUpdate() {
        if (this.state.username) {
            this.props.createNewUser(this.state)
                .then( () => this.props.history.push('/UserProfile'))
                .fail( this.setState({username: null}))
        }
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
        this.setState({ username: username});
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

    render () {
        return (
            <div className="session-form">
                <h2>Welcome to Danterest</h2>
                {this.displayErrors()}
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
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        />
                    </label>
                    <label>Age:
                        <input
                        type="number"
                        value={this.state.age}
                        onChange={this.handleInput('age')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
};

export default Signup;