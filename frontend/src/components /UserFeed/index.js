import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import './UserFeed.css';

import Searchbar from '../Searchbar/index';
import FilterByPropertyType from '../FilterByPropertyType/index';

import FilterPrice from '../FilterPrice/index';

import { Center, Square, Circle, Text, Divider, Wrap, WrapItem } from '@chakra-ui/react'

function UserFeed() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const queryFilter = new URLSearchParams(search).get('s');
  const [filterQuery, setFilterQuery] = useState(queryFilter || '');

  const queryFilterPrice = new URLSearchParams(search).get('s');
  const [filterQueryPrice, setFilterQueryPrice] = useState(
    queryFilterPrice || '200'
  );

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
    searchQuery,
    filterQuery,
    filterQueryPrice
  );

  // if (recListings.length) {
  return (
    <>
      <div className='searchBarAndResults'>
        {/* <div className='barAndFilter'>
            <div className='topSearchBar'>
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <FilterButton
                filterQuery={filterQuery}
                setFilterQuery={setFilterQuery}
              />
              <FilterPrice
                filterQueryPrice={filterQueryPrice}
                setFilterQueryPrice={setFilterQueryPrice}
              />
            </div>
          </div> */}
        <div>

          <div className='oneRemMargin'></div>

          <Wrap>
            <WrapItem>
              <Center>
                <Searchbar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <FilterByPropertyType
                  filterQuery={filterQuery}
                  setFilterQuery={setFilterQuery}
                />
              </Center>
            </WrapItem>
          </Wrap>

          <div className='oneRemMargin'></div>

          <Center><Text as='b' fontSize='3xl'>{recListings.length} Results</Text></Center>

          <ul className='allCards'>
            {recListings.map((listing) => {
              let d = new Date(listing.createdAt);
              let dateWritten = d.toString().slice(4, 10);
              if (
                listing.propertyType === filterQuery &&
                listing.price <= filterQueryPrice
              ) {
                return (
                  <li key={listing.id} className='feed-list'>
                    <NavLink
                      className='listing-link'
                      to={`/listings/${listing.id}`}
                    >
                      <div className='neumorphic-card mx-auto'>
                        <div className='neumorphic-card__outer'>
                          <img
                            className='neumorphic-image'
                            src={listing.imageUrl[0]}
                            alt='listing'
                          />
                          <p className='neumorphic-card__title'>
                            {listing.city.slice(0, -5)}
                          </p>
                          <div className='propertyTypeAndPriceLine'>
                            <p className='neumorphic-card__text'>
                              {listing.propertyType}
                            </p>
                            <p className='neumorphic-card__text'>
                              $
                              {listing.price === 0
                                ? listing.price + 1
                                : listing.price}{' '}
                              / night
                            </p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </li>
                );
              } else if (
                filterQuery === '' &&
                listing.price <= filterQueryPrice
              ) {
                return (
                  <li key={listing.id} className='feed-list'>
                    <NavLink
                      className='listing-link'
                      to={`/listings/${listing.id}`}
                    >
                      <div className='neumorphic-card mx-auto'>
                        <div className='neumorphic-card__outer'>
                          <img
                            className='neumorphic-image'
                            src={listing.imageUrl[0]}
                            alt='listing'
                          />
                          <p className='neumorphic-card__title'>
                            {listing.city.slice(0, -5)}
                          </p>
                          <div className='propertyTypeAndPriceLine'>
                            <p className='neumorphic-card__text'>
                              {listing.propertyType}
                            </p>
                            <p className='neumorphic-card__text'>
                              $
                              {listing.price === 0
                                ? listing.price + 1
                                : listing.price}{' '}
                              / night
                            </p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
  // } else {
  // return (
  //   <>
  //     <div className='barAndFilter'>
  //       <div className='topSearchBar'>
  //         <SearchBad
  //           searchQuery={searchQuery}
  //           setSearchQuery={setSearchQuery}
  //         />
  //         <FilterButton
  //           filterQuery={filterQuery}
  //           setFilterQuery={setFilterQuery}
  //         />
  //         <FilterPrice
  //           filterQueryPrice={filterQueryPrice}
  //           setFilterQueryPrice={setFilterQueryPrice}
  //         />
  //       </div>
  //     </div>
  //     <h2 className='rec-title'>No Listings Match Current Search</h2>
  //   </>
  // );
}
// }

export default UserFeed;
