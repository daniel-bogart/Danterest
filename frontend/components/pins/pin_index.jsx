import React from "react";

export default class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    return (
      <ul>
        {this.props.pins.map((pin) => {
          return (
            <li key={pin.id}>
              <h2>{pin.title}</h2>
              <h3>{pin.description}</h3>
              <img src={pin.photoUrl} />
            </li>
          );
        })}
      </ul>
    );
  }
}
