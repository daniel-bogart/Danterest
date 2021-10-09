import React, {useState, useEffect} from 'react';
import { RiPencilFill } from 'react-icons/ri';
import PinIndexItem from '../pins/pin_index_item';

const NewBoardShow = (props) => {

  useEffect( () => {
    props.fetchBoard(props.userId, props.match.params.boardId);
  }, []);

  const pinCount = () => {
    var count = 0;
    props.board.pins.forEach((pin) => {
      count += 1;
    })
    return count;
  }
  
  if (props.board === undefined ) return null;
  return (
    <div className="board-show-container">
      <div className="masonry-wrap">
        <div className="board-info">
          <div className="board-info-title">
            <h1 className="board-show-title">{props.board.title}</h1>
            <div 
            className="create-board-button"
            onClick={() => props.openModal('edit-board')}
            ><RiPencilFill size={28}/></div>
          </div>
          <h3 className="board-description">{props.board.description}</h3>
        </div>
        <div className="pin-count" style={{fontWeight: "600", fontSize: "22px"}}>{pinCount()} Pins</div>
        <ul className="masonry">
          {props.board.pins.map((boardPin) => {
            return (
              <li className="index-pin" key={boardPin.id}>
                <PinIndexItem className="index-pin" pin={boardPin}/>
                <div className="pin-title">{boardPin.title}</div>
              </li>
            )
          })}
        </ul>
        </div>
    </  div>
  ); 
};

export default NewBoardShow;
