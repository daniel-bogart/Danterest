import React from 'react';
import BoardIndexContainer from "../boards/board_index_container";
import { MdAccountCircle } from "react-icons/md";
import BoardPinDropdown from './board_pin_dropdown';
import { HiPencil } from 'react-icons/hi';
import { FaArrowLeft } from 'react-icons/fa';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this);
  };

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  goBack() {
    this.props.history.goBack();
  }


  render() {
    if (!this.props.user) {
      return null
    } else {
      const firstName = this.props.user.first_name ||= ""
      const lastName = this.props.user.last_name ||= ""
      const {user, currentUser} = this.props

      const editUser = (currentUser === user) ? (
        <div className="pinfo-nav-left">
          <FaArrowLeft 
          className="back-button"
          onClick={this.goBack}
          size={22}
          />
          <HiPencil 
          size={30} 
          className="def-btn profile-edit-btn"
          onClick={() => this.props.openModal('edit-user')}
          />
        </div>
      ) : (
        <FaArrowLeft 
        className="back-button"
        onClick={this.goBack}
        size={22}
        />
      );
    return (
      <div className="user-show-page">
        <div className="user-sub-page">
          <div className="profile-info-box">
            <div className='profile-info'>
              <div className="profile-picture"><MdAccountCircle size={100}/></div>
              <div className="profile-surnames">{firstName} {lastName}</div>
              <h1 className="profile-name">@{this.props.user.username}</h1>
            </div>
          </div>
          <div className="create-board-button-container">
            {editUser}
            <BoardPinDropdown user={user} currentUser={currentUser} openModal={this.props.openModal}/>
          </div>
          <BoardIndexContainer user={user}/>
        </div>
      </div>
    )
  }
  }
};

export default UserProfile;