import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

const PinDelete = (props) => {

  async function handleDelete(e) {
    e.preventDefault();
    await props.deletePin(props.pinId);
    props.closeModal();
    props.history.goBack();
  }

  return (
    <div className="pin-delete-container">
      <div className="pin-edit-header">Are you sure?</div>
      <div className="delete-pin-text"
      >Once you delete a Pin, you can't undo it!</div>
      <div className="pin-delete-buttons">
        <div 
        className="cancel-btn"
        onClick={() => props.closeModal()}
        >Cancel</div>
        <div 
        onClick={handleDelete}
        className="delete-btn delete-pin">Delete Pin</div>
      </div>
    </div>
  );
};

export default PinDelete;