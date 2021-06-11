import React from 'react';
import { fetchAllBoards } from '../../actions/board_actions';
import BoardIndexItem from "./board_index_item";

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  };


  componentDidMount() {
    this.props.fetchAllBoards(this.props.session)
  };

  render() {
    return (
      <div>
        {this.props.boards.map((board) => <BoardIndexItem className="index-board" key={board.id} board={board}/>)}
      </div>
    )
  }
};

export default BoardIndex;

