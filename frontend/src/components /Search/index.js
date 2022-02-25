import { useHistory } from 'react-router-dom';
import React, { useState, useRef } from "react";
import "./Search.css"
import OutsideClickHandler from 'react-outside-click-handler';

const Search = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  const [style, setStyle] = useState("finder");
  let changeStyle = () => {
    setStyle("finderClicked");
  };

  const magnifyingGlass = useRef("icon");

  return (
    <div className='container'>
      <form action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
        <div className={style}>
          <div className='finder__outer'>
            <div className='finder__inner'>
            <div class="finder__icon" ref={magnifyingGlass}></div>
              <input
                className='finder__input'
                value={searchQuery}
                autoFocus={true}
                // onClick={changeStyle}
                onInput={(e) => setSearchQuery(e.target.value)}
                type='text'
                id='header-search'
                placeholder='What are you looking for?'
                name='s'
              />
                  {/* </OutsideClickHandler> */}
              {/* <button type="submit">Search</button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
