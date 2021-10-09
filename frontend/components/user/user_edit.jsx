import React, { useState, useEffect } from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

const UserEdit = (props) => {

  let [username, setUsername] = useState(`${props.currentUser.username}`);
  let [firstName, setFirstName] = useState(`${props.currentUser.first_name ||= ""}`);
  let [lastName, setLastName] = useState(`${props.currentUser.last_name ||= ""}`);

  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      firstName,
      lastName
    }
    await props.updateUser(user, props.userId);
    props.closeModal();
  }



  const handleInput = (type) => {
    return (e) => {
      if (type === 'username') {
        setUsername(e.target.value);
      } else if (type === 'firstName') {
        setFirstName(e.target.value) ;
      } else {
        setLastName(e.target.value);
      };
    };
  };


  return (
    <div className="user-edit-container">
      <div className="user-edit-header">Edit Profile</div>
      <div className="user-edit-subheader">People visiting your profile will see the following info</div>
      <div className="user-edit-surnames">
        <div className="user-edit-firstame">
          <div className="user-edit-label">First name</div>
          <input
          type="text"
          value={firstName}
          placeholder="Ex. Jo"
          onChange={handleInput('firstName')}
          />
        </div>
        <div className="user-edit-lastname">
          <div className="user-edit-label">Last name</div>
          <input
          type="text"
          value={lastName}
          placeholder="Ex. Smith"
          onChange={handleInput('lastName')}
          />
        </div>
      </div>
      <div className="user-edit-username">
        <div className="user-edit-label">Username</div>
        <input
        type="text"
        value={username}
        onChange={handleInput('username')}
        />
      </div>
      <div onClick={handleSubmit} className="delete-btn done">Done</div>
    </div>
  );
};

export default UserEdit;