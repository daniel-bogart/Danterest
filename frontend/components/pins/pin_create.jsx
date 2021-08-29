import React from "react";
import BoardIndexDropdown from '../boards/board_index_dropdown';
import { FaArrowLeft } from 'react-icons/fa';

class PinCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      title: '',
      description: '',
      photoFile: null
    }

    this.goBack = this.goBack.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
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

  handleUpload(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file
      });
    }
    if (file) fileReader.readAsDataURL(file);
  }

  render() {
    // console.log("this is photofile!!", this.state.photoFile)
    const currentLocation = window.location.href;
    return (
      <div className="pin-create-container">
        <div className="pin-create">
          <div className="pin-create-image-container">
            <input
              type="file"
              className="pin-create-file-input"
              name="image-upload"
              id="image-upload"
              onChange={this.handleUpload}
            />
            <label htmlFor="image-upload">
              <div>
                Click to upload
              </div>
            </label>
          </div>
          <div className="pincrate">
            <div className="pinfo-nav">
              <FaArrowLeft className="back-button" onClick={this.goBack}/>
              <div className="save-board-button-box">
                <BoardIndexDropdown
                fetchAllBoards={this.props.fetchAllBoards}
                currentLocation={currentLocation}
                openModal={this.props.openModal} 
                boards={this.props.boards}
                savePin={this.props.savePin}
                userId={this.props.userId}
                createPin={this.props.createPin}
                title={this.state.title}
                description={this.state.description}
                photoFile={this.state.photoFile}
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