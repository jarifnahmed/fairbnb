import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import './HomeFeed.css';
import '../UserListings/UserListings.css';

function Home() {
  const allListings = useSelector((state) => state.listings);
  const listingsArr = Object.values(allListings);

  if (listingsArr.length) {
    return (
      <>
        <ul className='unorderedList'>
          {listingsArr.map((listing) => {
            return (
              <li key={listing.id} className='allListings'>
                <div className='listing-container'>
                  <div className='imgDiv'>
                    <NavLink className='listing-link' to={`/listings/${listing.id}`}>
                      <img id='imgThumbnail' src={listing.imageUrl} />
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return null;
  }
}

export default Home;
