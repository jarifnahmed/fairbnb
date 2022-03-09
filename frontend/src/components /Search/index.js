import { useHistory } from 'react-router-dom';
import React, { useState, useRef } from "react";
import "./Search.css"

const Search = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  const [style, setStyle] = useState("finder");

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
                onInput={(e) => setSearchQuery(e.target.value)}
                type='text'
                id='header-search'
                placeholder='What are you looking for?'
                name='s'
              />
              {/* <button className='neumorphic-btn-filter' value={''}
              onClick={(e) => setSearchQuery(e.target.value)}
              >Everything</button>
              <button className='neumorphic-btn-filter' value={'House'}
              onClick={(e) => setSearchQuery(e.target.value)}
              >House</button>
              <button className='neumorphic-btn-filter' value={'Condo'}
              onClick={(e) => setSearchQuery(e.target.value)}
              >Condo</button>
              <button className='neumorphic-btn-filter' value={'Apartment'}
              onClick={(e) => setSearchQuery(e.target.value)}
              >Apartment</button>
              <button className='neumorphic-btn-filter' value={'Townhouse'}
              onClick={(e) => setSearchQuery(e.target.value)}
              >Townhouse</button>
              <button className='neumorphic-btn-filter' value={'Cabin'}
              onClick={(e) => setSearchQuery(e.target.value)}
              >Cabin</button>
              <button className='neumorphic-btn-filter' value={'Treehouse'}
              onClick={(e) => setSearchQuery(e.target.value)}
              >Treehouse</button>
              <button className='neumorphic-btn-filter' value={'Mansion'}
              onClick={(e) => setSearchQuery(e.target.value)}
              >Mansion</button> */}
              <select
                    className='neumorphic-btn-filter'
                    value={searchQuery}
                    placeholder='Property Type'
                    onChange={(e) => setSearchQuery(e.target.value)}
                >
                    <option disabled hidden value="">Property Type</option>
                    <option value="">Everything</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Cabin">Cabin</option>
                    <option value="Treehouse">Treehouse</option>
                    <option value="Mansion">Mansion</option>
                </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
