import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import SearchBar from './search_bar';
// import DropDown from './dropdown';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaGithub, FaPinterest, FaUserCircle, FaLinkedin } from 'react-icons/fa';
import NavDropdown from './dropdown/nav_dropdown';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }



  showModal() {
    state = {
      show: false,
    };
    showModal = (e) => {
      this.setState({ show: true });
    };
  }

  render() {
    const { openModal, closeModal } = this.props;


    const displayLogo = this.props.currentUser ? (
      <div className="home-links-loggedin">
        <Link to="/" className="logo-wrapper" >
          <img className="home-logo2" src={window.dLogo} />
        </Link>
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
    ) : (
      <div className="logo-wrapper">
        <Link to="/" className="home-logo1">
          <img src={window.danterestLogo} />
        </Link>
      </div>
    );

    const display = this.props.currentUser ? (
      <div className="nav-greeting">
        <a href="https://github.com/daniel-bogart" target="_blank"
            className="nav-icons"><FaGithub size={28}/></a>
        <a href="https://www.pinterest.com/" target="_blank" 
            className="nav-icons"><FaPinterest size={28}/></a>
        <a href="https://www.linkedin.com/in/daniel-bogart-b79876215/" target="_blank"
            className="nav-icons"><FaLinkedin size={28}/>
        </a>
        <NavLink className="nav-icons" to={`/users/${this.props.currentUser.id}`}><FaUserCircle size={28}/></NavLink>
        {/* <div className="nav-logout" onClick={this.props.logout}>Logout</div> */}
        {/* <div className="nav-dropdown"><MdKeyboardArrowDown size={25}/></div> */}
        <NavDropdown currentUser={this.props.currentUser} logout={this.props.logout}></NavDropdown>
      </div>
    ) : (
      <div className="login-signup">
        <div className="login-btn" onClick={() => openModal('login')}>Log in</div>
        <div className="signup-btn" onClick={() => openModal('signup')}>Sign up</div>
      </div>
    );

    return (
      <nav className="navbar">
        {displayLogo}
        {display}
      </nav>
    )
  };
};

export default NavBar
