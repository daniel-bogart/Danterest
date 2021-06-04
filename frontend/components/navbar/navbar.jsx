import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './search_bar';
// import DropDown from './dropdown';


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
        <Link to="/" className="home-logo2">
          <img src={window.dLogo} />
        </Link>
        <Link to="/" className="home-link">
          <p>Home</p>
        </Link>
      </div>
    ) : (
      <Link to="/" className="home-logo1">
        <img src={window.danterestLogo} />
      </Link>
    );

    const display = this.props.currentUser ? (
      <div className="nav-greeting">
        <h3>Hello, {this.props.currentUser.username}</h3>
        <button className="nav-logout" onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div className="login-signup">
      <button className="login-btn" onClick={() => openModal('login')}>Log in</button>
      {/* <Link className="login" to="/login" >Login</Link> */}
      <button className="signup-btn" onClick={() => openModal('login')}>Sign up</button>
      {/* <Link className="sign-up" to="/signup" >Sign Up</Link> */}
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
