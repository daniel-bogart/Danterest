import React from "react";
import BoardIndexDropdown from '../boards/board_index_dropdown';
import { FaArrowLeft } from 'react-icons/fa';

class PinCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      // selectedFile: null
      image: null,
    }

    this.goBack = this.goBack.bind(this);
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

  goBack() {
    this.props.history.goBack();
  }

  render() {

    const currentLocation = window.location.href;
    return (
      <div className="pin-create-container">
        <div className="pin-create">
          <div className="pin-create-image-container">
            <input
              type="file"
              className="pin-create-file-input"
              // onChange={}
            />
          </div>
          <div className="pincrate">
            <div className="pinfo-nav">
              <FaArrowLeft className="back-button" onClick={this.goBack}/>
              <div className="save-board-button-box">
                <BoardIndexDropdown 
                currentLocation={currentLocation}
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