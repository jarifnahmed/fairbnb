import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteListing } from '../../store/listings';
import Reviews from '../Reviews';
import EditListing from '../UpdateListing';
import './ListingDetails.css';

function ListingDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listingId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const listing = useSelector((state) => state.listings[listingId]);
  const [showReviews, setShowReviews] = useState(false);
  const deletingListing = () => dispatch(deleteListing(listing.id));

  if (listing && sessionUser && listing.userId !== sessionUser.id) {
    return (
      <>
        <div id='listing-reviews'>
          <div id='listing-details'>
            <p className='user-name'>Listing from {listing.User.username}</p>
            <img id='sd-img' src={listing.imageUrl} alt='Bad Image Link' />
            <p className='user-name'>{listing.name}</p>
            <p className='user-name'>{listing.address}</p>
            <p className='user-name'>{listing.city}</p>
            <p className='user-name'>{listing.state}</p>
            <p className='user-name'>{listing.country}</p>
            <p className='user-name'>$ {listing.price} per day</p>
            <p className='user-name'>{listing.description}</p>
          </div>
          {/* <Reviews /> */}
        </div>
      </>
    );
  } else if (listing && sessionUser && listing.userId === sessionUser.id) {
    return (
      <>
        <div id='listing-reviews'>
          <div id='listing-details'>
            <h1 className='title'>{listing.title}</h1>
            <h3 className='subtitle'>{listing.subtitle}</h3>
            <p className='user-name'>Listing from {listing.User.username}</p>
            <div id='e-d-btn-ctn'>
              <NavLink to={`/edit/listing/${listing.id}`}>
                <button className='edit-btn' type='submit'>
                  Edit
                </button>
              </NavLink>
              <button
                className='del-btn'
                type='submit'
                onClick={() => dispatch(deleteListing(listing.id))}
                onClick={() => {
                  deletingListing();
                  history.push('/');
                }}
              >
                Delete
              </button>
            </div>
            <img id='sd-img' src={listing.imageUrl} alt='Bad Image Link' />
            <p className='user-name'>{listing.name}</p>
            <p className='user-name'>{listing.address}</p>
            <p className='user-name'>{listing.city}</p>
            <p className='user-name'>{listing.state}</p>
            <p className='user-name'>{listing.country}</p>
            <p className='user-name'>$ {listing.price} per day</p>
            <p className='user-name'>{listing.description}</p>
          </div>
          {/* <Reviews /> */}
        </div>
      </>
    );
  } else if (listing) {
    //not logged in
    return (
      <>
        <div id='listing-reviews'>
          <div id='listing-details'>
            <p className='user-name'>Listing from {listing.User.username}</p>
            <img id='sd-img' src={listing.imageUrl} alt='Bad Image Link' />
            <p className='user-name'>{listing.name}</p>
            <p className='user-name'>{listing.address}</p>
            <p className='user-name'>{listing.city}</p>
            <p className='user-name'>{listing.state}</p>
            <p className='user-name'>{listing.country}</p>
            <p className='user-name'>$ {listing.price} per day</p>
            <p className='user-name'>{listing.description}</p>
          </div>
          {/* <Reviews /> */}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default ListingDetail;
