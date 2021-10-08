import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPlus } from "react-icons/fa"

const FooterButton = () => (
  <div className="footer-container">
    <NavLink className="footer-button" to="/users/pin-builder">
        <FaPlus size={25}/>
    </NavLink>
  </div>
);

export default FooterButton;