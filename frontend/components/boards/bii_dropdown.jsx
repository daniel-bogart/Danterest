import React from 'react';

class BIIDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    console.log("hitting")
    this.props.savePin({board_id: this.props.board.id, pin_id: this.props.pin.id})
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