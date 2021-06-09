import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

class PinShow extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    if (this.props.pin === undefined ) return null;
    return (
      <div className="pin-container">
        <div className="pin" key={this.props.pin.id}>
          <div className="pin-show-image-container">
            <img className="pin-show-image" src={this.props.pin.photoUrl} />
          </div>
          <div className="pinfo">
            <div className="pinfo-nav">
              <FaArrowLeft className="back-button" onClick={this.goBack}/>
              <button className="save-board-button">Save</button>
            </div>
            <div className="pinfo-text">
              <h1 className="pinfo-title">{this.props.pin.title}</h1>
              <h3 className="pinfo-description">{this.props.pin.description}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default PinShow;