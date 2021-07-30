import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

class BoardPinDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    this.setState({ showMenu: true});
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  componentDidUpdate() {
    const { showMenu } = this.state;

    setTimeout(() => {
      if (showMenu) {
        window.addEventListener("click", this.closeMenu);
      } else {
        window.removeEventListener("click", this.closeMenu);
      }
    }, 0);
  }

  render() {
    return (
      <div className="create-dropdown-container">
        <div 
        className="create-dropdown-box"
        onClick={() => {
          this.showMenu();
        }}>
        </div>
      </div>
    )
  }
}

export default BoardPinDropdown