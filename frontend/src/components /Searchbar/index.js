import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { Input, InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  const history = useNavigate();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };


  const sessionUser = useSelector((state) => state.session.user);
  const allListings = useSelector((state) => state.listings);
  const listingsArr = Object.values(allListings);

  const filterListings = (recListings, query) => {
    if (!query) {
      return recListings;
    }

    return recListings.filter((listing) => {
      const listingPriceSearch = listing.price.toString();
      const listingCitySearch = listing.city.toLowerCase();
      const listingPropertyTypeSearch = listing.propertyType.toLowerCase();
      return (
        listingPropertyTypeSearch.includes(query.toLowerCase()) ||
        listingCitySearch.includes(query.toLowerCase()) ||
        listingPriceSearch.includes(query.toString())
      );
    });
  };

  const recListings = filterListings(
    listingsArr.filter((listing) => listing.authorId !== sessionUser.id),
    searchQuery
  );

  return (
    <div>
      <form action='/' method='get' autoComplete='off' onSubmit={onSubmit}>
        <div>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input
              isInvalid={recListings.length === 0}
              errorBorderColor='crimson'
              htmlSize={33}
              width='auto'
              variant='filled'
              focusBorderColor='lime'
              value={searchQuery}
              autoFocus={true}
              onInput={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by City, Price, or Property Type"
              size="md"
              type="text"
            />
          </InputGroup>
        </div>
      </form>
    </div>
  )
}

export default Searchbar;
