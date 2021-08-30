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
    return (
      <ul className="splash-masonry">
        {this.props.pins.map((pin) => {
          return (
            <li className="splash-index-pin" key={pin.id}>
              <SplashIndexItem className="splash-index-pin" pin={pin}/>
            </li>
          );
        })}
      </ul>
    );
  }
}