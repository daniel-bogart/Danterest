import React, { useState, useEffect } from "react";
import PinIndexItem from './pin_index_item';
import LoadingIcon from '../misc/loader';
import SplashIndexItem from "../splash/splash_index_item";
import ReactRotatingText from "react-rotating-text";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";

const PinIndex = (props) => {

  useEffect(() => {
    props.fetchAllPins();
    props.fetchAllUsers();
  }, []);

  const changeColor = () => {
    const classes = ["rotating-blue", "rotating-yellow", "rotating-red", "rotating-orange"];
    var randomClass = classes[Math.floor(Math.random() * classes.length)];
    document.getElementById("splash-page-id").className = `${randomClass}`;
  }


  const indexDisplay = props.currentUser ? (
    <ul className="masonry">
    {props.pins.map((pin) => {
      const authorId = pin.author_id;
      const author = props.users[authorId];
      const displayName = (author.first_name) && (author.last_name) ? (
        `${author.first_name} ${author.last_name}`
      ) : (
        author.username 
      );
      return (
        <li className="index-pin" key={pin.id}>
          <PinIndexItem 
            className="index-pin" 
            pin={pin} 
            authorId={authorId}
            displayName={displayName}
          />
          <div className="pin-info-box">
            <div className="pin-title">{pin.title}</div>
            <div className="pin-index-author">
              <NavLink className="author-index-nav" to={`/users/${authorId}`}>
                <MdAccountCircle className="pin-index-author-photo" size={40}/>
              </NavLink>
              <NavLink className="author-index-nav" to={`/users/${authorId}`}>
                <div className="pin-index-author-name">{displayName}</div>
              </NavLink>
            </div>
          </div>
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
        onTypingStart={() => changeColor()}
        items={[
          "graphic art idea",
          "design inspiration",
          "travel destination",
          "gardening idea"
        ]}
        />
      </div>
    <ul className="splash-masonry">
    {props.pins.map((pin) => {
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
  if (!props.pins[props.pins.length-1]) {
    return (
      <div>
      <LoadingIcon/>
        <div className="loader-text">
          <div>We're adding new ideas to your</div>
          <div>home feed!</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="pin-index-box">
        <div className="masonry-wrap">
        {indexDisplay}
        </div>
      </div> 
    );
  }
};

export default PinIndex;


