import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    var randomColor = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, 0).slice(-6)}`
    return (
      <Link className="bii-link" to={`/users/${this.props.board.id}/${this.props.board.id}`}>
        <div className="bii" style={{background: `${randomColor}`}}>
          <h1 className="board-title">{this.props.board.title}</h1>
        </div>
      </Link>
    )
  }
};

export default BoardIndexItem;

