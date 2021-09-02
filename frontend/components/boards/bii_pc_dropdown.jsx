import React from 'react';

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

  componentDidUpdate() {
      this.props.fetchAllBoards(this.props.userId)
  }

  handleClick() {
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
      console.log("THIS IS DA FORM DATA", formData)
    };
      console.log("THIS IS DA FORM DATA", formData);
      console.log(Array.from(formData));
      for (let obj of formData) {
        console.log(obj)
      };
      this.props.createPin(formData)
        .then( pin => this.props.savePin({board_id: this.props.board.id, pin_id: pin.id}))
      this.props.openModal('saved-pin');
      this.setState({savedPin: false})
  }


  render() {
    // console.log("DIS IS DA PIN!!!", this.props.pin)
    // console.log("disss is USERID", this.props.userId)
    // console.log("disss is title!", this.props.title)
    // console.log("disss is description!", this.props.description)
    // console.log("nowww DIS is photofile", this.props.photoFile)
    return (
        <div onClick={() => this.handleClick()} className="bii-dropdown">
          <h1>SUCCESS</h1>
          <h1 className="board-title">{this.props.board.title}</h1>
        </div>
    )
  }
};

export default BIIPCDropdown;