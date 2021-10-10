import React, { useState, useEffect } from 'react';
import BoardIndexContainer from "../boards/board_index_container";
import { MdAccountCircle } from "react-icons/md";
import BoardPinDropdown from './board_pin_dropdown';
import { HiPencil } from 'react-icons/hi';
import { FaArrowLeft } from 'react-icons/fa';

const UserProfile = (props) => {

  useEffect(() => {
    props.fetchAllUsers();
  }, []);

  const goBack = () => {
    props.history.goBack();
  }

    if (!props.user) {
      return null
    } else {
      const firstName = props.user.first_name ||= ""
      const lastName = props.user.last_name ||= ""
      const pronouns = props.user.pronouns ||= ""
      const {user, currentUser} = props

      const editUser = (currentUser === user) ? (
        <div className="pinfo-nav-left">
          <FaArrowLeft 
          className="back-button"
          onClick={goBack}
          size={22}
          />
          <HiPencil 
          size={30} 
          className="def-btn profile-edit-btn"
          onClick={() => props.openModal('edit-user')}
          />
        </div>
      ) : (
        <FaArrowLeft 
        className="back-button"
        onClick={goBack}
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
              <div className="profile-name">{pronouns}</div>
              <h1 className="profile-name">@{props.user.username}</h1>
            </div>
          </div>
          <div className="create-board-button-container">
            {editUser}
            <BoardPinDropdown user={user} currentUser={currentUser} openModal={props.openModal}/>
          </div>
          <BoardIndexContainer user={user}/>
        </div>
      </div>
    );
  };
};

export default UserProfile;