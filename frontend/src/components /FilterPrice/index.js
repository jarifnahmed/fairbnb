import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from "react";
import "./FilterPrice.css"

const FilterPrice = ({ filterQueryPrice, setFilterQueryPrice }) => {
  const history = useNavigate();
  const onSubmit = (e) => {
    history.push(`?s=${filterQueryPrice}`);
    e.preventDefault();
  };

  const [style, setStyle] = useState("finder");

  const magnifyingGlass = useRef("icon");

  return (
    <div className='container'>
      <form className='priceSliderContainer' action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
        <div className='finder'>
          <div className='finder__outer__dropdown'>
            <div className='finder__inner'>
                <output className='priceSliderContainerOutput' name="result" for="price priceValue">Max Price: ${filterQueryPrice} / night</output>
                <input
                className="priceValueSearch"
                type='range'
                min="10" max="200" step="10"
                value={filterQueryPrice}
                placeholder='Max Price'
                onChange={(e) => setFilterQueryPrice(e.target.value)}
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
              </datalist>
              </div>
            </div>
        </div>
      </form>
    </div>
  );
};

export default FilterPrice;
