import { useNavigate } from 'react-router-dom';
import React from "react";
import { Select } from '@chakra-ui/react'

const FilterByPropertyType = ({ filterQuery, setFilterQuery }) => {
  const history = useNavigate();
  const onSubmit = (e) => {
    history.push(`?s=${filterQuery}`);
    e.preventDefault();
  };

  return (
    <div>
      <form action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
        <div>
          <Select
            variant='filled'
            value={filterQuery}
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
          </Select>
        </div>
      </form>
    </div>
  );
};

export default FilterByPropertyType;
