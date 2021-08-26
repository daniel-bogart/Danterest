import React from 'react';
import { Link } from 'react-router-dom';
import { RiPencilFill } from 'react-icons/ri';
import PinIndexItem from '../pins/pin_index_item';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  };

  componentDidMount() {
    console.log("THIS IS BOARD", this.props.board)
    // this.props.fetchAllBoards(this.props.userId);
    this.props.fetchBoard(this.props.userId, this.props.match.params.boardId);
    console.log(this.props);
    // this.props.fetchPinsOnBoard(this.props.userId, this.props.board.id)
  };

  goBack() {
    this.props.history.goBack();
  }

  render() {
    
    if (this.props.board === undefined ) return null;

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
        <ul className="masonry">
          {this.props.board.pins.map((boardPin) => {
            return (
              <li className="index-pin" key={boardPin.id}>
                <PinIndexItem className="index-pin" pin={boardPin}/>
                <h3>{boardPin.title}</h3>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

};

export default BoardShow;
