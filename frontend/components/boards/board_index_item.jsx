import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    // const colors = ['#b28fec', '#6b924a', '#3250f3', '#f2e52d', '#d369ba', '#b0e2e7', '#d96516', '#0f9de3', '#850cf2', '#d09c13', '#81ed61', '#a1299f', '#2c51ab', '#ce1525', '#fcb38e', '#ca200e' ];
    // const colors = ['#f80c12', '#ee1100', '#ff3311', '#ff4422', '#ff6644', '#ff9933', '#feae2d', '#ccbb33', '#d0c310', '#aacc22', '#69d025', '#22ccaa', '#12bdb9', '#11aabb', '#4444dd', '#3311bb', '#3b0cbd', '#442299'];
    const colors = ['#d12723', '#f08238', '#f2c758','#26a8c9']
    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    return (
      <Link className="bii-link" to={`/users/${this.props.board.user_id}/boards/${this.props.board.id}`}>
      {/* // <Link className="bii-link" to={`/users/${this.props.user_id}/boards/${this.props.board.id}`}> */}
        <div className="bii" style={{background: `${randomColor}`}}>
          <h1 className="board-title">{this.props.board.title}</h1>
        </div>
      </Link>
    )
  }
};

export default BoardIndexItem;

