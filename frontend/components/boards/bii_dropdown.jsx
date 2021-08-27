import React from 'react';

class BIIDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPin: false
    }
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidUpdate() {
      this.props.fetchAllBoards(this.props.userId)
  }

  handleClick() {
    const currentPin = this.props.pin.id;
    var saved = false
    {this.props.board.pins.map((pin) => {
      if (currentPin === pin.id) {
        saved = true
      }
    })}
    if (saved === false) {
      this.props.savePin({board_id: this.props.board.id, pin_id: this.props.pin.id});
      this.props.openModal('saved-pin');
      this.setState({savedPin: false})
    } else {
      this.props.openModal('already-saved-pin')
    }
  }


  render() {
    return (
        <div onClick={() => this.handleClick()} className="bii-dropdown">
          <h1 className="board-title">{this.props.board.title}</h1>
        </div>
    )
  }
};

export default BIIDropdown;