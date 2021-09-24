import React from "react";
import BoardIndexDropdown from '../boards/board_index_dropdown';
import { FaArrowLeft } from 'react-icons/fa';
import { HiArrowCircleUp } from 'react-icons/hi';
import { MdAccountCircle } from "react-icons/md";

class PinCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      title: '',
      description: '',
      photoFile: null,
      photoUrl: null,
    }

    this.goBack = this.goBack.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('image')
  }

  componentDidMount() {
    this.props.fetchAllBoards(this.props.userId);
    this.props.fetchUser(this.props.userId)
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
        photoFile: file,
        photoUrl: fileReader.result,
      });
      document.getElementById('image-upload-bg').className = 'upload-bg-none';
    }
    if (file) fileReader.readAsDataURL(file);
  }

  render() {
    const { photoUrl } = this.state;
    const showImage = photoUrl ? <img id="show-create-image" src={photoUrl}/>
    : null;

    const author = this.props.currentUser;
    const currentLocation = window.location.href;
    const displayName = (author.first_name) && (author.last_name) ? (
      `${author.first_name} ${author.last_name}`
    ) : (
      author.username 
    )
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
              <div id="image-upload-bg" className="image-upload-bg">
                <div className="pin-image-upload-bg">
                  <HiArrowCircleUp size={44} className="upload-arrow"/>
                  <div className="upload-text">Click to upload</div>
                </div>
              </div>
            </label>
            <div className="show-create-image">
              {showImage}
            </div>
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
              className="pin-create-title-input"
              type="text"
              value={this.state.title}
              placeholder="Add your title"
              onChange={this.handleInput('title')}
              maxLength="50"
              />
              <div className="pin-author">
                <MdAccountCircle className="pin-author-photo" size={52}/>
                <div className="pin-author-name">{displayName}</div>
              </div>
              <textarea
              type="text"
              value={this.state.description}
              placeholder="Tell everyone what your pin is about"
              onChange={this.handleInput('description')}
              maxLength="500"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PinCreate;