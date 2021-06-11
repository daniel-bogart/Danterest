import React from 'react';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>{this.props.board.title}</h1>
        <p>{this.props.board.description}</p>
      </div>
    )
  }
};

export default BoardIndexItem;