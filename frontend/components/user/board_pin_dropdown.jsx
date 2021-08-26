import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {Link} from 'react-router-dom';
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
    const linkStyle= {
      textDecoration: 'none',
      color: 'black'
    }

    return (
      <div className="create-dropdown-container">
        <div 
        className="create-dropdown-box"
        onClick={() => {
          this.showMenu();
        }}>
          <FaPlus 
          className="def-btn board-pin-create-button" 
          size={25} />
        </div>
        {this.state.showMenu ? (
            <div className="board-pin-drop-menu-index">
              <div>Create</div>
              <div className="drop-create-pin-button">
              <Link to="pin-builder" 
              style={{...linkStyle}}>
              <div className="drop-create-pin-button">
                Pin
              </div>
              </Link>
              </div>
              <div 
              className="drop-create-board-button"
              onClick={() => this.props.openModal('create-board')}
              >Board</div>
            </div>
          ) : null}
      </div>
    )
  }
}

export default BoardPinDropdown