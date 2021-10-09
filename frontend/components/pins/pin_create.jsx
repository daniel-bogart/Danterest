import React, { useState, useEffect } from "react";
import BoardIndexDropdown from '../boards/board_index_dropdown';
import { FaArrowLeft } from 'react-icons/fa';
import { HiArrowCircleUp } from 'react-icons/hi';
import { MdAccountCircle } from "react-icons/md";

const PinCreate = (props) => {
  
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [photoFile, setPhotoFile] = useState(null);
  let [photoUrl, setPhotoUrl] = useState(null);

  const handleInput = (type) => {
    return (e) => {
      if (type === 'title') {
        setTitle(e.target.value)
      } else {
        setDescription(e.target.value)
      }
    };
  };

  useEffect(() => {
    props.fetchAllBoards(props.userId);
    props.fetchUser(props.userId)
  }, []);

  const goBack = () => {
    props.history.goBack();
  }

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhotoFile(file);
      setPhotoUrl(fileReader.result);
      document.getElementById('image-upload-bg').className = 'upload-bg-none';
    }
    if (file) fileReader.readAsDataURL(file);
  }

  const showImage = photoUrl ? <img id="show-create-image" src={photoUrl}/>
  : null;

  const author = props.currentUser;
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
            onChange={handleUpload}
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
            <FaArrowLeft className="back-button" onClick={goBack}/>
            <div className="save-board-button-box">
              <BoardIndexDropdown
              fetchAllBoards={props.fetchAllBoards}
              currentLocation={currentLocation}
              openModal={props.openModal} 
              boards={props.boards}
              savePin={props.savePin}
              userId={props.userId}
              createPin={props.createPin}
              title={title}
              description={description}
              photoFile={photoFile}
              />
            </div>
          </div>
          <div className="pinput">
            <input
            className="pin-create-title-input"
            type="text"
            value={title}
            placeholder="Add your title"
            onChange={handleInput('title')}
            maxLength="50"
            />
            <div className="pin-author">
              <MdAccountCircle className="pin-author-photo" size={52}/>
              <div className="pin-author-name">{displayName}</div>
            </div>
            <textarea
            type="text"
            value={description}
            placeholder="Tell everyone what your pin is about"
            onChange={handleInput('description')}
            maxLength="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinCreate;