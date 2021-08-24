import React from "react";
import BoardIndexDropdown from '../boards/board_index_dropdown';

class PinCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      // selectedFile: null
      image: null,
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  }

  // fileSelect = e => {
  //   this.setState({
  //     selectedFile: e.target.files[0]
  //   })
  // }

  handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('image')
  }

  componentDidMount() {
    this.props.fetchAllBoards(this.props.userId);
  }

  render() {
    return (
      <div className="pin-create-container">
        <div className="pin-create">
          <div className="pin-create-image-container">
            <input
              type="file"
              // onChange={}
            />
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