import React from 'react';
import { withRouter } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import BoardIndexContainer from "../boards/board_index_container";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircle } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import BoardPinDropdown from './board_pin_dropdown';
// import 'antd/dist/antd.css';
// import { Avatar } from "antd";
// import { UserOutLined } from '@ant-design/icons';

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
              {/* <div className="profile-picture"><CgProfile size={64}/></div> */}
              <div className="profile-picture"><MdAccountCircle size={100}/></div>
              <h1 className="profile-name">{this.props.user.username}</h1>
              <h3 className="profile-email">{this.props.user.email}</h3>
            </div>
          </div>
          <div className="create-board-button-container">
            <BoardPinDropdown openModal={this.props.openModal}/>
          </div>
          <BoardIndexContainer user={this.props.user}/>
        </div>
      </div>
    )
  }
};

export default UserProfile;