import React, { useState, useEffect} from 'react';

const BIIDropdown = (props) => {


  useEffect(() => {
    props.fetchAllBoards(props.userId)
  }, [])

  const handleClick = () => {
    const currentPinId = props.pin.id;
    let saved = false
    {props.board.pins.map((pin) => {
      if (currentPinId === pin.id) {
        saved = true
      }
    })}
    if (saved === false) {
      props.savePin({board_id: props.board.id, pin_id: props.pin.id});
      props.openModal('saved-pin');
    } else {
      props.deletePinOnBoard({pin_id: props.pin.id, board_id: props.board.id})
      props.openModal('already-saved-pin')
    }
  }



  return (
    <div onClick={() => handleClick()} className="bii-dropdown">
      <h1 className="board-title">{props.board.title}</h1>
    </div>
  )
  
};

export default BIIDropdown;