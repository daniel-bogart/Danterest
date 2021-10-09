import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import BoardIndexDropdown from '../boards/board_index_dropdown';
import { MdAccountCircle } from "react-icons/md";
import PinOptionsDrop from './pin_options_drop';
import { NavLink } from 'react-router-dom';

const PinShow = (props) => {

  let [expanded, setExpanded] = useState('false');

  const handleClick = () => {
    if (expanded === 'false') {
    document.getElementById("pin-background").className = 'darken-background';
    document.getElementById("image-modal").className = 'expanded-image';
    setExpanded('true');
    } else {
      document.getElementById("image-modal").className = 'pin-show-image';
      document.getElementById("pin-background").className = 'pin-container';
      setExpanded('false');
    };
  };

  useEffect(() => {
    props.fetchPin(props.match.params.pinId);
    props.fetchAllBoards(props.userId);
    props.fetchAllUsers();
  }, []);

  const goBack = () => {
    props.history.goBack();
  }

  if (props.pin === undefined ) return null;
  const authorId = props.pin.author_id;
  const author = props.users[authorId];
  if (author === undefined) return null;
  const displayName = (author.first_name) && (author.last_name) ? (
    `${author.first_name} ${author.last_name}`
  ) : (
    author.username 
  )
  return (
    <div id="pin-background" className="pin-container">
      <div className="pin" key={props.pin.id}>
        <div className="pin-show-image-container">
          <img onClick={()=>handleClick()} 
          id="image-modal" className="pin-show-image" src={props.pin.photoUrl} />
        </div>
        <div className="pinfo">
          <div className="pinfo-nav">
            <div className="pinfo-nav-left">
              <FaArrowLeft 
                className="back-button"
                onClick={goBack}
                size={22}
              />
              <PinOptionsDrop
                currentUser = {props.userId}
                authorId = {props.pin.author_id}
                openModal = {props.openModal}
                pin={props.pin}
                updatePin={props.updatePin}
                closeModal={props.closeModal}
              />
            </div>
            <div className="save-board-button-box">
              <BoardIndexDropdown 
                fetchAllBoards={props.fetchAllBoards}
                openModal={props.openModal} 
                boards={props.boards}
                savePin={props.savePin}
                pin={props.pin}
                userId={props.userId}
                deletePinOnBoard={props.deletePinOnBoard}
                fetchBoard={props.fetchBoard}
              />
            </div>
          </div>
          <div className="pinfo-text">
            <h1 className="pinfo-title">{props.pin.title}</h1>
            <h3 className="pinfo-description">{props.pin.description}</h3>
          </div>
          <div className="pin-author">
            <NavLink className="author-profile-nav" to={`/users/${authorId}`}>
              <MdAccountCircle className="pin-author-photo" size={52}/>
            </NavLink>
            <NavLink className="author-profile-nav" to={`/users/${authorId}`}>
              <div className="pin-author-name">{displayName}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinShow;