import { useHistory } from 'react-router-dom';
import React, { useState, useRef } from "react";
import "./FilterButton.css"

const FilterButton = ({ filterQuery, setFilterQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${filterQuery}`);
    e.preventDefault();
  };

  const [style, setStyle] = useState("finder");

  const magnifyingGlass = useRef("icon");

  return (
    <div className='container'>
      <form action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
        <div>
              {/* <button className='neumorphic-btn-filter' value={''}
              onClick={(e) => setFilterQuery(e.target.value)}
              >Everything</button>
              <button className='neumorphic-btn-filter' value={'House'}
              onClick={(e) => setFilterQuery(e.target.value)}
              >House</button>
              <button className='neumorphic-btn-filter' value={'Condo'}
              onClick={(e) => setFilterQuery(e.target.value)}
              >Condo</button>
              <button className='neumorphic-btn-filter' value={'Apartment'}
              onClick={(e) => setFilterQuery(e.target.value)}
              >Apartment</button>
              <button className='neumorphic-btn-filter' value={'Townhouse'}
              onClick={(e) => setFilterQuery(e.target.value)}
              >Townhouse</button>
              <button className='neumorphic-btn-filter' value={'Cabin'}
              onClick={(e) => setFilterQuery(e.target.value)}
              >Cabin</button>
              <button className='neumorphic-btn-filter' value={'Treehouse'}
              onClick={(e) => setFilterQuery(e.target.value)}
              >Treehouse</button>
              <button className='neumorphic-btn-filter' value={'Mansion'}
              onClick={(e) => setFilterQuery(e.target.value)}
              >Mansion</button> */}
              <select
                    class='neumorphic-btn-filter'
                    className='neumorphic-btn-filter'
                    value={filterQuery}
                    placeholder='Property Type'
                    onChange={(e) => setFilterQuery(e.target.value)}
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
      </form>
    </div>
  );
};

export default FilterButton;
