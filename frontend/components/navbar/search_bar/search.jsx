import React, { useState, useEffect, useRef } from 'react';
import useDebounce from '../../../utils/debounce';

const Search = (props) => {

  const [searchTag, setSearchTag] = useState('');
  const [newSearch, setNewSeach] = useState(false);
  const myRef = React.createRef();
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

  // const handleUpdate = (value) => {
  //   if (value)
  // }

  const handleInput = () => {
    return (e) => {
      setSearchTag(e.currentTarget.value);
      setNewSeach(true);
    };
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
        className="search-proper"
        ref={myRef}
        type="text"
        value={searchTag}
        onChange={handleInput}
        />
      </div>
    </div>
  );

};

export default Search;
