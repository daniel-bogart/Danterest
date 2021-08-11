import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import BoardDelete from './board_delete_container';

class BoardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      newModal: 'false'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.editBoard({title: this.state.title, id: this.props.boardId}, this.props.userId);
    this.props.closeModal();
  }



  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  }

  render() {

    const title = this.props.board ? this.props.board.title : ""

    return (
      <div id="board-edit-container" className="board-edit-container-display">
        <div>Edit your board</div>
        <div className="board-edit-input">
          <h6>Name</h6>
          <input
          type="text"
          value={this.state.title}
          placeholder={`${title}`}
          onChange={this.handleInput('title')}
          />
        </div>
        <div className="final-board-edit-btn-container">
          <div onClick={this.handleSubmit} className="final-board-edit-btn">Done</div>
          <div onClick={() => this.props.openModal('delete-board')} 
            className="final-board-delete-btn">Delete</div>
        </div>
      </div>
    )
  }
}

export default BoardEdit;