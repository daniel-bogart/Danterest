import React, { useEffect, useState } from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

const BoardDelete = (props) => {

  async function handleDelete(e) {
    e.preventDefault();
    await props.deleteBoard(props.userId, props.boardId);
    props.closeModal();
    props.history.goBack();
  }


  return (
    <div id="board-delete-container" className="board-delete-container-none">
      <div>Are you sure?</div>
      <div>Once you delete a board and all it's Pins, you can't undo it!</div>
      <div className="final-board-delete-btn-container">
        <div className="cancel-btn" onClick={() => props.openModal('edit-board')}>Cancel</div>
        <div onClick={handleDelete} className="delete-btn">Delete Forever</div>
      </div>
    </div>
  )
}

export default BoardDelete;