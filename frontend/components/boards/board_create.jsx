import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

class BoardCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.createNewBoard({board: {title: this.state.title}}, this.props.userId);
    this.props.closeModal();
    // this.props.createNewBoard(this.state.title).then(this.props.closeModal());

  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  }

  render() {

    return (
      <div className="board-create-container">
        <div>Create Board</div>
        <div className="board-create-input">
          <h6>Name</h6>
          <input
          type="text"
          value={this.state.title}
          placeholder='Like "Places to Go" or "Recipies to Make"'
          onChange={this.handleInput('title')}
          />
        </div>
        <div className="final-board-create-btn-container">
          <div onClick={this.handleSubmit} className="final-board-create-btn">Create</div>
        </div>
      </div>
    )
  }
}

export default BoardCreate;