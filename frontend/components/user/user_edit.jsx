import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props)
    this.state = {
      username: `${this.props.currentUser.username}`,
      firstName: `${this.props.currentUser.firstName ||= ""}`,
      lastName: `${this.props.currentUser.lastName ||= ""}`
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username, 
      firstName: this.state.firstName, 
      lastName: this.state.lastName
    }
    console.log("userId", this.props.userId)
    console.log("user", user);
    await this.props.updateUser(user, this.props.userId);
    this.props.closeModal();
  }



  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  }

  render() {


    return (
      <div className="user-edit-container">
        <div className="user-edit-surnames">
          <div className="user-edit-firstame">
            <div className="user-edit-label">First name</div>
            <input
            type="text"
            value={this.state.firstName}
            placeholder="Ex. Jo"
            onChange={this.handleInput('firstName')}
            />
          </div>
          <div className="user-edit-lastname">
            <div className="user-edit-label">Last name</div>
            <input
            type="text"
            value={this.state.lastName}
            placeholder="Ex. Smith"
            onChange={this.handleInput('lastName')}
            />
          </div>
        </div>
        <div className="user-edit-username">
          <div className="user-edit-label">Username</div>
          <input
          type="text"
          value={this.state.username}
          onChange={this.handleInput('username')}
          />
        </div>
        <div onClick={this.handleSubmit} className="final-board-delete-btn">Done</div>
      </div>
    )
  }
}

export default UserEdit;