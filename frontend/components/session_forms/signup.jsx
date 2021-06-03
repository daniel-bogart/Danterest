import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: '',
            password: '',
            age: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        if (this.state.username) {
            this.props.createNewUser(this.state)
                .then( () => this.props.history.push('/UserProfile'));
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = this.state.email;
        const emailArray = email.split('@');
        const username = emailArray[0];
        this.setState({ username: username});
        // if username length greater than 0 then call lines 33/43 | call in componentdidupdate || settimeout method on lines 33/34 new method
    }

    render () {
        return (
            <div className="session-form">
                <h2>Sign Up!</h2>
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