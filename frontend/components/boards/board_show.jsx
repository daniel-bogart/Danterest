import React from 'react';
import { Link } from 'react-router-dom';
import { RiPencilFill } from 'react-icons/ri';
import PinIndexItem from '../pins/pin_index_item';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
    this.pinCount = this.pinCount.bind(this);
  };

  componentDidMount() {
    this.props.fetchBoard(this.props.userId, this.props.match.params.boardId);
  };

  goBack() {
    this.props.history.goBack();
  }

  pinCount() {
    var count = 0;
    this.props.board.pins.forEach((pin) => {
      count += 1;
    })
    return count;
  }

  render() {

    const countStyle = {
      fontSize: "larger",
      fontWeight: "bold" 
    }
    
    if (this.props.board === undefined ) return null;

    return (
      <div className="board-show-container">
        <div className="masonry-wrap">
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
          <div className="pin-count" style={{fontWeight: "600", fontSize: "22px"}}>{this.pinCount()} Pins</div>
          <ul className="masonry">
            {this.props.board.pins.map((boardPin) => {
              return (
                <li className="index-pin" key={boardPin.id}>
                  <PinIndexItem className="index-pin" pin={boardPin}/>
                  <div className="pin-title">{boardPin.title}</div>
                </li>
              )
            })}
          </ul>
          </div>
      </  div>
    ) 
  }

};

export default BoardShow;
