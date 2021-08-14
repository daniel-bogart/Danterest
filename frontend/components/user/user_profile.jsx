import React from 'react';
import { withRouter } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import BoardIndexContainer from "../boards/board_index_container";
import { MdAccountCircle } from "react-icons/md";
import BoardPinDropdown from './board_pin_dropdown';
import { HiPencil } from 'react-icons/hi';
import { openModal } from '../../actions/modal_actions';

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
              <div className="profile-picture"><MdAccountCircle size={100}/></div>
              <h1 className="profile-name">{this.props.user.username}</h1>
              <h3 className="profile-email">{this.props.user.email}</h3>
            </div>
          </div>
          <div className="create-board-button-container">
            <HiPencil 
            size={30} 
            className="def-btn profile-edit-btn"
            onClick={() => this.props.openModal('edit-user')}
            />
            <BoardPinDropdown openModal={this.props.openModal}/>
          </div>
          <BoardIndexContainer user={this.props.user}/>
        </div>
      </div>
    )
  }
};

export default UserProfile;