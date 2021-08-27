import React from 'react';
import { MdCheck } from 'react-icons/md';

function AlreadySaved(props) {

  return (
    <div className="pin-saved-modal">
      <img className="home-logo-saved" src={window.dLogo}/>
      <div className="already-saved-box">
        <div className="pin-is-saved">Already saved!</div>
        <MdCheck className="check" size={48}/>
      </div>
    </div>
  )
}

export default AlreadySaved;