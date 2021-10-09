import React, { useEffect, useState, useRef } from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

const BoardEdit = (props) => {

    let [title, setTitle] = useState(`${props.board.title}`);
    let [description, setDescription] = useState(`${props.board.description ||= ""}`);
  

  async function handleSubmit(e) {
    e.preventDefault();
    await props.editBoard({title: title, id: props.boardId}, props.userId);
    props.editBoard({description: description, id: props.boardId}, props.userId);
    props.closeModal();
  };



  const handleInput = (type) => {
    return (e) => {
      if (type === 'title') {
        setTitle(e.target.value)
      } else {
        setDescription(e.target.value)
      };
    };
  };


    return (
      <div id="board-edit-container" className="board-edit-container-display">
        <div>Edit your board</div>
        <div className="board-edit-input">
          <h6>Name</h6>
          <input
          type="text"
          value={title}
          placeholder='Like "Places to Go" or "Recipes to Make"'
          onChange={handleInput('title')}
          maxLength="50"
          />
          <h6>Description</h6>
          <input
          type="text"
          value={description}
          placeholder="What's your board about?"
          onChange={handleInput('description')}
          maxLength="500"
          />
        </div>
        <div className="final-board-edit-btn-container">
          <div onClick={handleSubmit} className="final-board-edit-btn">Done</div>
          <div className="delete-button-box" onClick={() => props.openModal('delete-board')}>
            <div className="edit-board-delete-btn">Delete board</div>
              <div className="delete-button-text">
                <div>Delete this board and all its Pins forever.</div>
                <div>You can't undo this!</div>
              </div>
          </div>
        </div>
      </div>
    );
};

export default BoardEdit;