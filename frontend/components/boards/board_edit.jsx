import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import BoardDelete from './board_delete_container';

class BoardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `${this.props.board.title}`,
      description: `${this.props.board.description ||= ""}`,
      newModal: 'false'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.editBoard({title: this.state.title, id: this.props.boardId}, this.props.userId);
    this.props.editBoard({description: this.state.description, id: this.props.boardId}, this.props.userId);
    this.props.closeModal();
  }



  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  }

  render() {

    // const title = this.props.board ? this.props.board.title : ""
    // const description = this.props.board ? this.props.board.description : ""

    return (
      <div id="board-edit-container" className="board-edit-container-display">
        <div>Edit your board</div>
        <div className="board-edit-input">
          <h6>Name</h6>
          <input
          type="text"
          value={this.state.title}
          placeholder='Like "Places to Go" or "Recipes to Make"'
          onChange={this.handleInput('title')}
          />
          <h6>Description</h6>
          <input
          type="text"
          value={this.state.description}
          placeholder="What's your board about?"
          onChange={this.handleInput('description')}
          />
        </div>
        <div className="final-board-edit-btn-container">
          <div onClick={this.handleSubmit} className="final-board-edit-btn">Done</div>
          <div className="delete-button-box" onClick={() => this.props.openModal('delete-board')}>
            <div className="edit-board-delete-btn">Delete board</div>
              <div className="delete-button-text">
                <div>Delete this board and all its Pins forever.</div>
                <div>You can't undo this!</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardEdit;