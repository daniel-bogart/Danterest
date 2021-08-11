import React from 'react';

function SplashItem(props) {
  return (
    <img className="pin-image" src={props.pin.photoUrl}/>
  )
}

export default SplashItem;