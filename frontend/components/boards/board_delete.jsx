import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

class BoardDelete extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async handleDelete(e) {
    e.preventDefault();
    await this.props.deleteBoard(this.props.userId, this.props.boardId);
    this.props.closeModal();
    this.props.history.goBack();
  }

  render() {

    return (
      <div id="board-delete-container" className="board-delete-container-none">
        <div>Are you sure?</div>
        <div>Once you delete a board and all it's Pins, you can't undo it!</div>
        <div className="final-board-delete-btn-container">
          <div className="delete-board-cancel-btn" onClick={() => this.props.openModal('edit-board')}>Cancel</div>
          <div onClick={this.handleDelete} className="final-board-delete-btn">Delete Forever</div>
        </div>
      </div>
    )
  }
}

export default BoardDelete;