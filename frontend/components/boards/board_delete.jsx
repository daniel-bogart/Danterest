import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

class BoardDelete extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleDelete(e) {
    e.preventDefault();
    await this.props.deleteBoard(this.props.userId, this.props.boardId);
    this.props.closeModal();
  }

  render() {


    return (
      <div className="board-delete-container">
        <div>Are you sure?</div>
        <div>Once you delete a board and all it's Pins, you can't undo it!</div>
        <div className="final-board-edit-btn-container">
          <div onClick={this.props.closeModal()}>Cancel</div>
          {/* <div onClick={this.handleDelete} className="final-board-delete-btn">Delete</div> */}
        </div>
      </div>
    )
  }
}

export default BoardDelete;