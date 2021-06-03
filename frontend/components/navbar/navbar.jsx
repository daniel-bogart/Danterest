import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './search_bar';
// import DropDown from './dropdown';
import { currentUser, login, logout } from '../../actions/session_actions';

const NavBar = ({ currentUser, logout }) => {

  // const login_button = () => (
  //   <nav className="login">
  //     <button className="login-button" onClick={() =>}
  //   </nav>
  // )

  return (
    <nav className="navbar">
      <Link to="/" className="home-link">
        <span className="dan-logo">Danterest</span>
      </Link>
    </nav>
  )

}







export default NavBar
// class NavBar extends React.Component {


//   render () {

//     return (
//       <header className="navbar">
//         <h1 className="dan-logo">

//         </h1>
//         <div className="nav-links">
//           {this.sessionView()}
//         </div>
//       </header>
//     )
//   }
// }