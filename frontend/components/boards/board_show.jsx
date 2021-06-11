import React from 'react';
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  };

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.userId.boardId)
  };

  goBack() {
    this.props.history.goBack();
  }

  render() {
    
    if (this.props.board === undefined ) return null;

    return (
      <div className="board-show-container">
        <div className="board-info">
          <h1 className="board-show-title">{this.props.board.title}</h1>
          <h3 className="board-description">{this.props.board.description}</h3>
        </div>
      </div>
    )
  }

};

export default BoardShow;
