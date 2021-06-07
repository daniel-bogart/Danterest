import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { receiveCurrentUser } from '../../../actions/session_actions';

class NavDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    }
  }
}