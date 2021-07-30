import React from 'react';
import { withRouter } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import BoardIndexContainer from "../boards/board_index_container";

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className="user-show-page">
        <div className="user-sub-page">
          <div className="profile-info-box">
            <div className='profile-info'>
              <h1 className="profile-name">{this.props.user.username}</h1>
              <h3 className="profile-email">{this.props.user.email}</h3>
            </div>
          </div>
          <div className="create-board-button-container">
            <div className="create-board-button"><FaPlus size={28}/></div>
          </div>
          <BoardIndexContainer user={this.props.user}/>
        </div>
      </div>
    )
  }
};

export default UserProfile;