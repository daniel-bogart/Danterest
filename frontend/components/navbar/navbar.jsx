import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './search_bar';
// import DropDown from './dropdown';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }


  
  render() {
    console.log(this.props)
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
      <div>
        <h3>Hello, {this.props.currentUser.username}</h3>
        <button className="nav-logout" onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div className="login-signup">
      {/* <button className="login">Login</button> */}
      <Link className="login" to="/login" >Login</Link>
      {/* <button className="signup">Sign Up</button> */}
      <Link className="sign-up" to="/signup" >Sign Up</Link>
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
