import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaPinterest, FaUserCircle, FaLinkedin } from 'react-icons/fa';
import NavDropdown from './dropdown/nav_dropdown';
import { FaSearch } from 'react-icons/fa';
import useDebounce from '../../utils/debounce';


const NavBar = (props) => {

  const [searchTag, setSearchTag] = useState('');
  const [newSearch, setNewSeach] = useState(false);
  const [searchbarOpen, setSearchbarOpen] = useState(true);
  const myRef = React.createRef();
  const [pins, setPins] = useState(<p>No Results</p>);
  const debouncedSearchTag = useDebounce(searchTag, 500);
  const pinRef = useRef();

  useEffect(async () => {
    if (searchTag === '' && !newSearch) {
      const newSearchTag = props.match.params.searchTag;
      setSearchTag(newSearchTag);
      myRef.current.focus();
      await props.fetchAllPins();
    } else if (searchTerm.length > 0) {
      searchPins();
    }
  }, [props.pins, debouncedSearchTag]);

  const changeSearchStatus = () => {
    if (searchbarOpen) {
      setSearchbarOpen(false);
    } else {
      setSearchbarOpen(true);
    }
  }

  const { openModal } = props;
  const displayLogo = props.currentUser ? (
    <div className="home-links-loggedin">
      <Link to="/" className="logo-wrapper" >
        <img className="home-logo2" src={window.dLogo} />
      </Link>
      <NavLink exact to="/" 
      className="home-link" 
      activeClassName="home-link-active"
      >
        Home
      </NavLink>
    </div>
  ) : (
    <div className="logo-wrapper">
      <Link to="/" className="home-logo1">
        <img src={window.danterestLogo} />
      </Link>
    </div>
  );

  const handleInput = () => {
    return (e) => {
      setSearchTag(e.target.value);
      setNewSeach(true);
    };
  };

  const searchBar = props.currentUser ? (
    <div className="search-wrapper">
      <FaSearch className="fa-search" size={20}/>
      <p onClick={() => changeSearchStatus()}></p>
      <input
        className="search-proper"
        ref={myRef}
        type="text"
        placeholder='Search'
        value={searchTag}
        onChange={handleInput()}
      />
      <p onClick={() => changeSearchStatus()}></p>
    </div>
  ) : (
    null
  );

  const display = props.currentUser ? (
    <div className="nav-greeting">
      <a href="https://github.com/daniel-bogart" target="_blank"
          className="nav-icons"><FaGithub size={28}/></a>
      <a href="https://www.pinterest.com/" target="_blank" 
          className="nav-icons"><FaPinterest size={28}/></a>
      <a href="https://www.linkedin.com/in/daniel-bogart-b79876215/" target="_blank"
          className="nav-icons"><FaLinkedin size={28}/>
      </a>
      <NavLink className="nav-icons" to={`/users/${props.currentUser.id}`}><FaUserCircle size={28}/></NavLink>
      <NavDropdown openModal={openModal} currentUser={props.currentUser} logout={props.logout}></NavDropdown>
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
      {searchBar}
      {display}
    </nav>
  )
};

export default NavBar
