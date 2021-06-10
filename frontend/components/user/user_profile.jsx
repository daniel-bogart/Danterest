import React from 'react';
import { withRouter } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className="user-profile-container">
        <div className="profile-info">
          <h1 className="profile-name">{this.props.user.username}</h1>
          <h3 className="profile-email">{this.props.user.email}</h3>
        </div>
        <div className="create-board-button">
          <div><FaPlus size={28}/></div>
        </div>
      </div>
    )
  }
};

export default UserProfile;