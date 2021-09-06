import React from "react";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import PinIndexItem from './pin_index_item';
import LoadingIcon from '../misc/loader';
import SplashIndexItem from "../splash/splash_index_item";
import Splash from "../splash/splash";
import ReactRotatingText from "react-rotating-text";

export default class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPins();
    this.props.fetchAllUsers();
  }

  changeColor() {
    const classes = ["rotating-blue", "rotating-yellow", "rotating-red", "rotating-orange"];
    var randomClass = classes[Math.floor(Math.random() * classes.length)];
    document.getElementById("splash-page-id").className = `${randomClass}`;
  }


  render() {
    const indexDisplay = this.props.currentUser ? (
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
    ) : (
      <div id="splash-page-id" className="splash-page">
        <div className="splash-text">
          <div>Get your next</div>
          <ReactRotatingText
          id="rotating-text"
          className="rotating-text-1"
          pause="2800"
          typingInterval="28"
          deletingInterval="16"
          onTypingStart={() => this.changeColor()}
          items={[
            "graphic art idea",
            "design inspiration",
            "travel destination",
            "gardening idea"
          ]}
          />
        </div>
      <ul className="splash-masonry">
      {this.props.pins.map((pin) => {
        return (
          <li className="splash-index-pin" key={pin.id}>
            <SplashIndexItem className="splash-index-pin" pin={pin}/>
          </li>
        );
      })}
      </ul>
      <div className="splash-fade"></div>
      </div>
    );

    if (!this.props.pins[this.props.pins.length-1]) {
      return (<LoadingIcon/>)
    } else {
      return (
        <div className="pin-index-box">
          {indexDisplay}
        </div>
      );
    }
  }
}


