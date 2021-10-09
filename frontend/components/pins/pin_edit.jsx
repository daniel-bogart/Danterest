import React, { useState, useEffect } from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

const PinEdit = (props) => {

  let [title, setTitle] = useState(`${props.pin.title}`);
  let [description, setDescription] = useState(`${props.pin.description}`);


  const handleInput = (type) => {
    return (e) => {
      if (type === 'title') {
        setTitle(e.target.value)
      } else {
        setDescription(e.target.value);
      }
    };
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { pin, userId } = props;
    let updatedPin = {
      id: pin.id,
      author_id: userId,
      title: title,
      description: description
    }
    await props.updatePin(updatedPin)
    props.closeModal();
  }

  return (
    <div className="pin-edit-container">
      <div className="pin-edit-header">Edit this pin</div>
      <div className="pin-edit-box">
        <div className="pin-edit-input">
          <div className="pin-edit-input-text">
            <div className="peit-1">Title</div>
            <div className="peit-2">Description</div>
          </div>
          <div className="pin-edit-input-box">
            <input
              type="text"
              value={title}
              onChange={handleInput('title')}
              maxLength="50"
            />
            <textarea
              className="pin-edit-description-input"
              type="text"
              value={description}
              onChange={handleInput('description')}
              maxLength="500"
            />
          </div>
        </div>
        <div className="pin-edit-image-wrapper">
          <img className="pin-edit-image" src={props.pin.photoUrl}/>
        </div>
      </div>
      <div className="pin-edit-btns">
        <div 
        onClick={() => props.openModal('delete-pin')} 
        className="cancel-btn">Delete</div>
        <div className="pin-edit-btns-right">
          <div 
            onClick={() => props.closeModal()} 
            className="cancel-btn">Cancel</div>
          <div 
            onClick={handleSubmit} 
            className="pin-edit-save-btn">Save</div>
        </div>
      </div>
    </div>
  );

};

export default PinEdit;