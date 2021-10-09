import React, {useState, useEffect } from 'react';
import BoardIndexItem from "./board_index_item";

const BoardIndex = (props) => {


  useEffect( () => {
    props.fetchAllBoards(props.user.id)
  }, []);

  return (
    <div className="index-board-box">
      {props.boards.map((board) => <BoardIndexItem className="index-board" key={board.id} board={board}/>)}
    </div>
  )
};

export default BoardIndex;