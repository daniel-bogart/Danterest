import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './search_bar';
// import DropDown from './dropdown';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    }

    // this.isCurrentUser = this.isCurrentUser.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      // this.fetchData(this.props.currentUser);
      this.setState({ username: this.props.currentUser.username})
    }
  };

  

  // const login_button = () => (
  //   <nav className="login">
  //     <button className="login-button" onClick={() =>}
  //   </nav>
  // )
  // isCurrentUser() {
  //   if (this.props.currentUser) {
  //     debugger
  //     return <h3>{this.props.currentUser.username}</h3>
  //   }
  // }

  render() {

    return (
      <nav className="navbar">
        <Link to="/" className="home-link">
          <span className="dan-logo">Danterest</span>
        </Link>
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
        <h3>{this.state.username}</h3>
      </nav>
    )
  }
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