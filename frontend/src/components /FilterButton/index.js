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
      <form className='propertyTypeDropdownContainer' action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
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


                {/* <output name="result" for="price priceValue">Max Price: ${filterQuery} / night</output>
                <input
                className="priceValueSearch"
                type='range'
                min="10" max="200" step="10"
                value={filterQuery}
                placeholder='Max Price'
                onChange={(e) => setFilterQuery(e.target.value)}
                list="tickmarks"
              />
              <datalist id="tickmarks">
              <option value="10" label="$10"></option>
              <option value="20" label="$20"></option>
              <option value="30" label="$30"></option>
              <option value="40" label="$40"></option>
              <option value="50" label="$50"></option>
              <option value="60" label="$60"></option>
              <option value="70" label="$70"></option>
              <option value="80" label="$80"></option>
              <option value="90" label="$90"></option>
              <option value="100" label="$100"></option>
              <option value="110" label="$110"></option>
              <option value="120" label="$120"></option>
              <option value="130" label="$130"></option>
              <option value="140" label="$140"></option>
              <option value="150" label="$150"></option>
              <option value="160" label="$160"></option>
              <option value="170" label="$170"></option>
              <option value="180" label="$180"></option>
              <option value="190" label="$190"></option>
              <option value="200" label="$200"></option>
              </datalist> */}
        </div>
      </form>
    </div>
  );
};

export default FilterButton;
