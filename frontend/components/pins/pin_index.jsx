import React from "react";

export default class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  // shufflePins() {
  //   shuffle(this.props.pins);
  // }

  render() {
    return (
      <ul className="masonry">
        {this.props.pins.map((pin) => {
          return (
            <li className="pin" key={pin.id}>
              {/* <h3>{pin.description}</h3> */}
              <img className="pin-image" src={pin.photoUrl} />
              <h3>{pin.title}</h3>
            </li>
          );
        })}
      </ul>
    );
  }
}
