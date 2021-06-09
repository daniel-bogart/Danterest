import React from "react";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import PinIndexItem from './pin_index_item';

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
            <li className="index-pin" key={pin.id}>
              <PinIndexItem className="index-pin" pin={pin}/>
              <h3>{pin.title}</h3>
            </li>
          );
        })}
      </ul>
    );
  }
}


