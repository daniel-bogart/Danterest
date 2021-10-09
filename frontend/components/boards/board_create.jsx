import React, { useState, useEffect } from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

const BoardCreate = (props) => {
  let [title, setTitle] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();
    await props.createNewBoard({board: {title: title}}, props.userId);
    props.closeModal();

  }

  const handleInput = (type) => {
    return (e) => {
      setTitle(e.target.value);
    };
  }


  return (
    <div className="board-create-container">
      <div>Create Board</div>
      <div className="board-create-input">
        <h6>Name</h6>
        <input
        type="text"
        value={title}
        placeholder='Like "Places to Go" or "Recipies to Make"'
        onChange={handleInput('title')}
        />
      </div>
      <div className="final-board-create-btn-container">
        <div onClick={handleSubmit} className="final-board-create-btn">Create</div>
      </div>
    </div>
  );

};

export default BoardCreate;