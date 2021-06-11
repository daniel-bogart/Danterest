import React from 'react';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="bii">
        <h1 className="board-title">{this.props.board.title}</h1>
        <p className="board-description">{this.props.board.description}</p>
      </div>
    )
  }
};

export default BoardIndexItem;