import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../HomeFeed/HomeFeed.css';
import Footer from '../Footer/index';
import Search from '../Search/index';
import { useState } from 'react';

function UserFeed() {
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');


  const sessionUser = useSelector((state) => state.session.user);
  const allListings = useSelector((state) => state.listings);
  const listingsArr = Object.values(allListings);


  const filterListings = (recListings, query) => {
    if (!query) {
        return recListings;
    }

    return recListings.filter((listing) => {
        const listingTitle = listing.title.toLowerCase();
        return listingTitle.includes(query);
    });
};



  const recListings = filterListings(listingsArr.filter(
    (listing) => listing.authorId !== sessionUser.id
  ), searchQuery);

  if (recListings.length) {
    return (
      <>
        <h2 id='recommended'>Recommended Listings</h2>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <h2>There are {recListings.length} listing(s).</h2>

        <ul className='unorderedList'>
          {recListings.map((listing) => {
            return (
              <li key={listing.id} className='allListings'>
                <div className='listing-container'>
                  <div className='imgDiv'>
                    <NavLink
                      className='listing-link'
                      to={`/listings/${listing.id}`}
                    >
                      <h2 className='myuploadListingTitle'>{listing.title}</h2>
                      <img id='imgThumbnail' src={listing.imageUrl} />
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div id='spacer'></div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
      <h2 id='recommended'>No Listings Currently Match</h2>
      <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </>

    )
  }
}

export default UserFeed;
