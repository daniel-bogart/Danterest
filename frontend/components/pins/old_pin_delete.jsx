import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

class PinDelete extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async handleDelete(e) {
    e.preventDefault();
    await this.props.deletePin(this.props.pinId);
    this.props.closeModal();
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="pin-delete-container">
        <div className="pin-edit-header">Are you sure?</div>
        <div className="delete-pin-text"
        >Once you delete a Pin, you can't undo it!</div>
        <div className="pin-delete-buttons">
          <div 
          className="cancel-btn"
          onClick={() => this.props.closeModal()}
          >Cancel</div>
          <div 
          onClick={this.handleDelete}
          className="delete-btn delete-pin">Delete Pin</div>
        </div>
      </div>
    )
  }
};

export default PinDelete;