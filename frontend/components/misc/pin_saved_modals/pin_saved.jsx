import React from 'react';

function PinSaved(props) {

  return (
    <div className="pin-saved-modal">
      <img className="home-logo-saved" src={window.dLogo}/>
      <div className="pin-is-saved">Saved!</div>
    </div>
  )
}

export default PinSaved;