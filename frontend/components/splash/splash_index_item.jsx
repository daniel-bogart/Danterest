import React from 'react';

function SplashIndexItem(props) {
  return (
    <img className="splash-image" src={props.pin.photoUrl}/>
  )
}

export default SplashIndexItem;