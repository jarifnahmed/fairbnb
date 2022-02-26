import { useHistory } from 'react-router-dom';
import React, { useState, useRef } from "react";
import "./SearchBad.css"

const SearchBad = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  const [styleBad, setstyleBad] = useState("finderBad");
  let changestyleBad = () => {
    setstyleBad("finderBadClicked");
  };

  const magnifyingGlass = useRef("icon");

  return (
    <div className='container'>
      <form action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
        <div className={styleBad}>
          <div className='finderBad__outer'>
            <div className='finderBad__inner'>
            <div class="finderBad__icon" ref={magnifyingGlass}></div>
              <input
                className='finderBad__input'
                value={searchQuery}
                // onClick={changestyleBad}
                autoFocus={true}
                onInput={(e) => setSearchQuery(e.target.value)}
                type='text'
                id='header-search'
                placeholder='What are you looking for?'
                name='s'
              />
              {/* <button type="submit">Search</button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBad;
