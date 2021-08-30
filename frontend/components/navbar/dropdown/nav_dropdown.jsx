import React from 'react';
import {MdKeyboardArrowDown } from "react-icons/md";
import {NavLink} from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      expanded: 'false'
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

  handleClick() {
    if (this.state.expanded === 'false') {
    document.getElementById("nav-dropdown-switch").className.baseVal = 'darken-dropdown';
    this.setState({expanded: 'true'});
    } else {
      document.getElementById("nav-dropdown-switch").className.baseVal = 'nav-dropdown';
      this.setState({expanded: 'false'});

    }
  }

  render() {
    return (
      <div id="session-dropdown" className="session-dropdown-container">
        <div className="session-dropdown-box">
          <div onClick={() => {
            this.showMenu();
            this.handleClick();
          }}
            className="user-dropdown-button">
            <MdKeyboardArrowDown 
            id="nav-dropdown-switch"
            className="nav-dropdown"
            size={25}/>
          </div>

          {this.state.showMenu ? (
            <div className="drop-menu-index">
              <NavLink 
              className="current-user-link" 
              to={`/users/${this.props.currentUser.id}`}
              style={{textDecoration: "none"}}>
              <h6 style={{padding: "10px"}}>Currently in</h6>
              <div className="dropdown-profile">
                <MdAccountCircle className="account-circle-drop" size={80}/>
                <div className="current-user-info">
                  <ul className="dropdown-ul">
                    <li>Hello, {this.props.currentUser.username}!</li>
                    <li>{this.props.currentUser.email}</li>
                  </ul>
                </div>
              </div>
              </NavLink>
              <div className="more-options">
                <h6 className="mo-text">More options</h6>
                <div className="dropdown-logout" onClick={this.props.logout}>Log out</div>
                <div className="dropdown-settings" onClick={() => this.props.openModal('edit-user')}>Settings</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default NavDropdown