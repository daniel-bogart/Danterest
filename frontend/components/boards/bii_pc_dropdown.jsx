import React, { useEffect, useState } from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

const BIIPCDropdown = (props) => {

  let [title, setTitle] = useState(props.title);
  let [description, setDescription] = useState(props.description);
  let [userId, setUserId] = useState(props.userId);
  let [photoFile, setPhotoFile] = useState(props.photoFile);


  useEffect(() => {
    props.fetchAllBoards(props.userId);
  }, []);

  async function handleClick() {
    const formData = new FormData();
    formData.append('pin[title]', title);
    formData.append('pin[description]', description);
    formData.append('pin[author_id]', userId);
    if (photoFile){
      formData.append('pin[photo]', photoFile)
    };
    props.createPin(formData)
      .then( pin => props.savePin({board_id: props.board.id, pin_id: pin.pin.id}))
      props.openModal('saved-pin');
  }


  return (
      <div onClick={() => handleClick()} className="bii-dropdown">
        <h1 className="board-title">{props.board.title}</h1>
      </div>
  )
};

export default BIIPCDropdown;