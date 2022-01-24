import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../HomeFeed/HomeFeed.css';

function UserFeed() {
  const sessionUser = useSelector((state) => state.session.user);
  const allListings = useSelector((state) => state.listings);
  const listingsArr = Object.values(allListings);
  const recListings = listingsArr.filter(
    (listing) => listing.userId !== sessionUser.id
  );

  if (recListings.length) {
    return (
      <>
        <p id='about'>LISTINGS HERE</p>
        <ul className='unorderedList'>
          {recListings.map((listing) => {
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
  }
}

export default UserFeed;
