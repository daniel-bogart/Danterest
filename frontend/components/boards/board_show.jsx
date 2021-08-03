import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  };

  componentDidMount() {
    this.props.fetchBoard(this.props.userId, this.props.match.params.boardId)
    console.log(this.props)
  };

  goBack() {
    this.props.history.goBack();
  }

  render() {
    
    if (this.props.board === undefined ) return null;

    console.log(this.props.board.title)
    console.log("this is the board", this.props.match.params.userId.boardId)

    return (
      <div className="board-show-container">
        <div className="board-info">
          <div className="board-info-title">
            <h1 className="board-show-title">{this.props.board.title}</h1>
            <div 
            className="create-board-button"
            onClick={() => this.props.openModal('edit-board')}
            ><RiPencilFill size={28}/></div>
          </div>
          <h3 className="board-description">{this.props.board.description}</h3>
        </div>
      </div>
    )
  }

};

export default BoardShow;
