import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

class BIIPCDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPin: false,
      title: this.props.title,
      description: this.props.description,
      userId: this.props.userId,
      photoFile: this.props.photoFile
    }
    this.handleClick = this.handleClick.bind(this);
  };

  // componentDidMount() {
  //   // this.props.fetchBoard(this.props.userId, this.props.board.id)
  //   this.props.fetchAllBoards(this.props.userId)
  // }

  async handleClick() {
    // e.preventDefault();
    const {title, description, userId, photoFile} = this.state;

    // const pin = {
    //   title: title,
    //   description: description,
    //   author_id: userId,
    //   photo: photoFile
    // }
    const formData = new FormData();
    formData.append('pin[title]', title);
    formData.append('pin[description]', description);
    formData.append('pin[author_id]', userId);
    if (photoFile){
      formData.append('pin[photo]', photoFile)
    };
    this.props.createPin(formData)
      .then( pin => this.props.savePin({board_id: this.props.board.id, pin_id: pin.pin.id}))
      this.props.openModal('saved-pin');
  }


  render() {
    return (
        <div onClick={() => this.handleClick()} className="bii-dropdown">
          <h1 className="board-title">{this.props.board.title}</h1>
        </div>
    )
  }
};

export default BIIPCDropdown;