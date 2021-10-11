import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {

    const boardPins = props.boardPins;

    return (
      <Link className="bii-link" to={`/users/${props.board.user_id}/boards/${props.board.id}`}>
        <div className="bii">
          <div className="display-board-1">
            {boardPins[0] ? <img src={boardPins[0].photoUrl} className="left-bp-image" /> : <div className="left-bp-image"></div> }
          </div>
          <div className="display-board-3">
            {boardPins[1] ? <img src={boardPins[1].photoUrl} className="top-bp-image" /> : <div className="top-bp-image"></div> }
            {boardPins[2] ? <img src={boardPins[2].photoUrl} className="bottom-bp-image" /> : <div className="bottom-bp-image"></div> }       
          </div>
        </div>
          <h1 className="board-title">{props.board.title}</h1>
          <h1 className="bp-length">{boardPins.length} Pins</h1>
      </Link>
    )
};

export default BoardIndexItem;