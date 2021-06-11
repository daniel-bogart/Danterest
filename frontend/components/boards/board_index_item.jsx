import React from 'react';
import distinctColors from 'distinct-colors';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    // var distinctColors = require('distinct-colors').default
    // var palette = distinctColors(1)
    var randomColor = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, 0).slice(-6)}`
    // console.log(palette[0]._rgb._unclipped[0]);
    // const color = palette[0]._rgb._unclipped
    // let randoColor = [];
    // color.forEach(num => randoColor);
    return (
      // <div className="bii" style={{background: `${randomColor}`}}>
      <div className="bii" style={{background: `${randomColor}`}}>
        <h1 className="board-title">{this.props.board.title}</h1>
        {/* <p className="board-description">{this.props.board.description}</p> */}
      </div>
    )
  }
};

export default BoardIndexItem;

