import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteListing } from '../../store/listings';
import Footer from '../Footer/index';
import './UserListings.css';

function UserListings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const allListings = useSelector((state) => state.listings);
  const listingsArr = Object.values(allListings);

  let userListings;

  if (sessionUser) {
    userListings = listingsArr.filter(
      (listing) => listing.authorId === sessionUser.id
    );

    return (
      <>
        <h2 className='rec-title'>My Listings</h2>
        <ul className='unorderedList-myupload'>
          {userListings.map((listing) => {
            return (
              <li key={listing.id} className='allListings-myupload'>
                <div className='listing-container-myupload'>
                  <NavLink
                    className='header'
                    to={`/listings/${listing.id}`}
                  ></NavLink>
                  <div className='imgDiv'>
                    <NavLink
                      className='listing-link'
                      to={`/listings/${listing.id}`}
                    >
                      <h2 className='myuploadListingTitle'>{listing.title}</h2>
                      <img id='imgThumbnail' src={listing.imageUrl} />
                      <div className='listing-details'>
                        <div id='e-d-btn-ctn'>
                          <NavLink to={`/edit/listing/${listing.id}`}>
                            <button className='edit-btn-myupload' type='submit'>
                              Edit
                            </button>
                          </NavLink>
                          <button
                            className='del-btn'
                            type='submit'
                            onClick={() => dispatch(deleteListing(listing.id))}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Footer />
      </>
    );
  } else {
    return history.push('/');
  }
}

export default UserListings;
