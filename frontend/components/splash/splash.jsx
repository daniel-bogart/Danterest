import React from "react";
import SplashIndexItem from './splash_index_item';
import LoadingIcon from '../misc/loader';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }


  render() {
    if (!this.props.pins[this.props.pins.length-1]) {
      return (<LoadingIcon/>)
    } else {
      return (
        <ul className="masonry">
          {this.props.pins.map((pin) => {
            return (
              <li className="index-pin" key={pin.id}>
                <SplashIndexItem className="index-pin" pin={pin}/>
                <h3>{pin.title}</h3>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}