import React from 'react'
import { withRouter } from 'react-router-dom';

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
                .then(this.props.closeModal())
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

    render () {
        return (
            <div className="signup-form-container">
                <form className="signup-form-box" onSubmit={this.handleSubmit}>
                <h2>Welcome to Danterest</h2>
                <br/>
                    <div onClick={this.props.closeModal} className="close-y">Y</div>
                {this.displayErrors()}
                    <div className="signup-form">
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
                    </div>
                </form>
            </div>
        );
    }
};

export default withRouter(Signup);