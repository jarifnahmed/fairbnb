import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../HomeFeed/HomeFeed.css';
import Footer from '../Footer/index';

function UserFeed() {
  const sessionUser = useSelector((state) => state.session.user);
  const allListings = useSelector((state) => state.listings);
  const listingsArr = Object.values(allListings);
  const recListings = listingsArr.filter(
    (listing) => listing.authorId !== sessionUser.id
  );

  if (recListings.length) {
    return (
      <>
        <h2 id='recommended'>Recommended Listings</h2>
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
  }
}

export default UserFeed;
