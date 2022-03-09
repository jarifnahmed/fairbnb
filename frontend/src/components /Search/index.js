import { useHistory } from 'react-router-dom';
import React, { useState, useRef } from "react";
import "./Search.css"

const Search = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  const magnifyingGlass = useRef("icon");

  return (
    <div className='container'>
      <form action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
        <div className='finder'>
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
              >Everything</button>*/}
              {/* <select
                    class='neumorphic-btn-filter'
                    className='neumorphic-btn-filter'
                    value={searchQuery}
                    placeholder='Property Type'
                    onChange={(e) => setSearchQuery(e.target.value)}
                >
                    <option disabled hidden value="">Property Type</option>
                    <option value="">Everything</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                </select> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  // return (
  //   <div className='container'>
  //     <form action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
  //           <div class="finder__icon" ref={magnifyingGlass}></div>
  //             <input
  //               className='finder__input'
  //               value={searchQuery}
  //               autoFocus={true}
  //               onInput={(e) => setSearchQuery(e.target.value)}
  //               type='text'
  //               id='header-search'
  //               placeholder='What are you looking for?'
  //               name='s'
  //             />
  //     </form>
  //   </div>
  // );
};

export default Search;
