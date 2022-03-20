import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteListing } from '../../store/listings';
import { FaEdit, FaRegUserCircle, FaTrashAlt } from 'react-icons/fa';
import './UserListings.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div className='ud-feed-container'>
          <div className='ud-left-div'></div>
          <div className='ud-center-div'>
            <h2 className='rec-title'>My Listings</h2>
            <ul>
              {userListings.map((listing) => {
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
                          {/* <div id='e-d-btn-ctn'>
                          <NavLink to={`/edit/listing/${listing.id}`}>
                            <button className='my-5 btn neumorphic-btn' id="editButton" type='submit'>
                              <FaEdit id='editBttnLogo' />
                            </button>
                          </NavLink>
                          <button
                            className='my-5 btn neumorphic-btn'
                            id="deleteButton"
                            type='submit'
                            onClick={() => dispatch(deleteListing(listing.id))}
                          >
                            <FaTrashAlt id='trashBttnLogo' />
                          </button>
                        </div> */}
                          {/* <p className='user-name'>{listing.User.name}</p> */}
                          {/* <p className="date-written">{dateWritten}</p> */}
                        </div>
                        <div>
                          {/* <img class='neumorphic-image' src={listing.imageUrl} alt='listing' /> */}
                        </div>
                      </div>
                    </NavLink>
                    <div id='e-d-btn-ctn'>
                      <NavLink to={`/edit/listing/${listing.id}`}>
                        <button
                          className='my-5 btn neumorphic-btn'
                          id='editButton'
                          type='submit'
                        >
                          <FaEdit />
                        </button>
                      </NavLink>
                      <button
                        className='my-5 btn neumorphic-btn'
                        id='deleteButton'
                        type='submit'
                        onClick={() => {
                          dispatch(deleteListing(listing.id));

                          toast.error('Listing Removed!', {
                            position: 'bottom-center',
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                            closeButton: false,
                          });
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                      <ToastContainer
                        position='bottom-center'
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        rtl={false}
                        containerId={'deleteBookingToast'}
                        closeButton={false}
                        theme='colored'
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='ud-right-div'></div>
        </div>
      </>
    );
  } else {
    return history.push('/');
  }
}

export default UserListings;
