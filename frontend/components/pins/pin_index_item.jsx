import React from 'react';
import { Link } from 'react-router-dom';

function PinIndexItem(props) {
  return (
    <Link to={`/pins/${props.pin.id}`}><img className="pin-image" src={props.pin.photoUrl}/></Link>
  )
}

export default PinIndexItem;