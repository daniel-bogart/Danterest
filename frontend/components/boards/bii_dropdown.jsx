import React from 'react';

class BIIDropdown extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {


    return (
        <div className="bii-dropdown">
          <h1 className="board-title">{this.props.board.title}</h1>
        </div>
    )
  }
};

export default BIIDropdown;