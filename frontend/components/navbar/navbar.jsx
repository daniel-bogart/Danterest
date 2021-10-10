import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaPinterest, FaUserCircle, FaLinkedin } from 'react-icons/fa';
import NavDropdown from './dropdown/nav_dropdown';
import { FaSearch } from 'react-icons/fa';
import useDebounce from '../../utils/debounce';
import PinIndexItem from '../pins/pin_index_item';

const NavBar = (props) => {

  const [searchTag, setSearchTag] = useState('');
  const [newSearch, setNewSearch] = useState(false);
  const myRef = React.createRef();
  const [pins, setPins] = useState([]);
  const [resultHeader, setResultHeader] = useState('');
  const debouncedSearchTag = useDebounce(searchTag, 500);
  const pinRef = useRef();
  pinRef.current = pins;

  useEffect(async () => {
    if (searchTag === '' && !newSearch) {
      const newSearchTag = props.match.params.searchTag;
      setSearchTag(newSearchTag);
      myRef.current.focus();
    } else if (props.pins.length < 1) {
      await props.fetchAllPins();
    } else if (searchTag.length > 0) {
      searchPins();
    }
    if (newSearch) {
      handleUpdate(debouncedSearchTag);
    }
  }, [props.pins, debouncedSearchTag]);

  const handleUpdate = (value) => {
    if (value) {
      props.history.push(`/search/${value}`);
    } else if (value === '') {
      props.history.push("/");
      setPins([]);
      setNewSearch(false);
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
      setNewSearch(true);
      setTimeout(() => {
        setNewSearch(false)
      }, 501);
    };
  };

  const handleClick = () => {
    setSearchTag('');
  };


  const searchPins = () => {

    const searchResults = Object.values(props.pins).filter(pin => 
      pin.title.toLowerCase().includes(searchTag.toLowerCase())
    );

    const newPins = [];

    searchResults.forEach((pin) => {

      newPins.push(
        <div className="pin-search-item" onClick={() => handleClick()} key={pin.id}>
          <PinIndexItem className="index-pin" pin={pin}/>
          <div className="pin-info-box">
            <div className="pin-title">{pin.title}</div>
          </div>
        </div>
      )
    });


    if (newPins.length > 0) {
      setPins(newPins);
      setResultHeader(<h1 className="pin-results-header">Pin results</h1>)
    } else {
      setPins([]);
      setResultHeader(<h1 className="pin-results-header">No pin results</h1>)
    };
  };


  const showResults = (searchTag === '') || (searchTag === undefined) ? (
    null
  ) : (
    <div className='show-results'>
      {resultHeader}
      {pins}
    </div>
  );

  const searchBar = props.currentUser ? (
    <div className="search-wrapper">
      {/* <FaSearch className="fa-search" size={20}/> */}
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
    <nav>
      <header className="navbar">
        {displayLogo}
        {searchBar}
        {display}
      </header>
      <div className="show-results-wrap">
        {showResults}
      </div>
    </nav>
  )
};

export default NavBar
