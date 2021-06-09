import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
  }

  render() {
    // if (this.props.pin === undefined ) return null;
    return (
      <div className="pin" key={this.props.pin.id}>
        <h1>{this.props.pin.title}</h1>
        <h3>{this.props.pin.description}</h3>
        <img className="pin-show-image" src={this.props.pin.photoUrl} />
      </div>
    )
  }
};

export default PinShow;