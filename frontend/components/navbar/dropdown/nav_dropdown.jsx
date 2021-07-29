import React from 'react';
import {MdPerson, MdKeyboardArrowDown } from "react-icons/md";
import {NavLink} from 'react-router-dom';

class NavDropdown extends React.Component {
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
      <div id="session-dropdown" className="session-dropdown-container">
        <div className="session-dropdown-box">
        <div onClick={this.showMenu} className="user-dropdown-button">
          <div id="user-dropdown-button-wrapper">
            <MdKeyboardArrowDown className="nav-dropdown" size={25}/>
          </div>
        </div>

          {this.state.showMenu ? (
            <div className="drop-menu-index">
              <NavLink className="current-user-link" to={`/users/${this.props.currentUser.id}`}>
              <div className="current-user-info">
                <ul>
                  <li>{this.props.currentUser.username}</li>
                  <li>{this.props.currentUser.email}</li>
                </ul>
              </div>
              </NavLink>
              <div className="dropdown-logout" onClick={this.props.logout}>Logout</div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default NavDropdown