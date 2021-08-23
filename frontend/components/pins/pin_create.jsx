import React from "react";
import BoardIndexDropdown from '../boards/board_index_dropdown';

class PinCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  }

  componentDidMount() {
    this.props.fetchAllBoards(this.props.userId);
  }

  render() {
    return (
      <div id="pin-background" className="pin-container">
        <div className="pin">
          <div className="pin-show-image-container">
            this is where create image goes
          </div>
          <div className="pinfo">
            <div className="pinfo-nav">
              <div className="save-board-button-box">
                <BoardIndexDropdown 
                openModal={this.props.openModal} 
                boards={this.props.boards}
                savePin={this.props.savePin}
                pin={this.props.pin}
                />
              </div>
            </div>
            <div className="pinput">
              <input
              type="text"
              value={this.state.title}
              placeholder="Add your title"
              onChange={this.handleInput('title')}
              />
              <input
              type="text"
              value={this.state.description}
              placeholder="Tell everyone what your pin is about"
              onChange={this.handleInput('description')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PinCreate;