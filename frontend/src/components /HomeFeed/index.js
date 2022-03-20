import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import './HomeFeed.css';

function HomeFeed() {
  const allListings = useSelector((state) => state.listings);
  const listingsArr = Object.values(allListings);

  if (listingsArr.length) {
    return (
      <>
        <ul>
          {listingsArr.map((listing) => {
            let d = new Date(listing.createdAt);
            let dateWritten = d.toString().slice(4, 10);
            return (
              <li key={listing.id} className='feed-list'>
                <NavLink
                  className='listing-link'
                  to={`/listings/${listing.id}`}
                >
                  <div className='neumorphic-card mx-auto'>
                    <div className='neumorphic-card__outer'>
                      {/* <h2 className='title'>{listing.title}</h2> */}
                      <img
                        class='neumorphic-image'
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
                      {/* <p className='user-name'>{listing.User.name}</p> */}
                      {/* <p className="date-written">{dateWritten}</p> */}
                    </div>
                    <div>
                      {/* <img class='neumorphic-image' src={listing.imageUrl} alt='listing' /> */}
                    </div>
                  </div>
                </NavLink>
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

export default HomeFeed;
