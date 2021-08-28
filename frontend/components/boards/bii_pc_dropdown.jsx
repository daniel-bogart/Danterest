import React from 'react';

class BIIPCDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPin: false,
    }
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidUpdate() {
      this.props.fetchAllBoards(this.props.userId)
  }

  handleClick() {
    // e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.props.title);
    formData.append('pin[description]', this.props.description);
    formData.append('pin[userId]', this.props.userId);
    if (this.props.photoFile){
      formData.append('pin[photo]', this.props.photoFile)
    };
    // const currentPin = this.props.pin.id;
    // var saved = false
    // {this.props.board.pins.map((pin) => {
    //   if (currentPin === pin.id) {
    //     saved = true
    //   }
    // })}
    // if (saved === false) {
      // PROBLEM IS THAT PIN IS NOT DEFINED - It hasn't been created yet!
      this.props.createPin(formData)
        .then(this.props.savePin({board_id: this.props.board.id, pin_id: this.props.pin.id}))
      this.props.openModal('saved-pin');
      this.setState({savedPin: false})
    // } else {
      this.props.openModal('already-saved-pin')
    // }
  }


  render() {
    console.log("DIS IS DA PIN!!!", this.props.pin)
    console.log("disss is USERID", this.props.userId)
    console.log("disss is title!", this.props.title)
    console.log("disss is description!", this.props.description)
    console.log("nowww DIS is photofile", this.props.photoFile)
    return (
        <div onClick={() => this.handleClick()} className="bii-dropdown">
          <h1>SUCCESS</h1>
          <h1 className="board-title">{this.props.board.title}</h1>
        </div>
    )
  }
};

export default BIIPCDropdown;