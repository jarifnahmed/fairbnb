import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { deleteListing } from '../../store/listings';
import Comments from '../Comments';
import EditListing from '../UpdateListing';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import './ListingDetails.css';
import renderHTML from 'react-render-html';

import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import { Slide } from 'react-slideshow-image';

import Bookings from '../Bookings';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g');
Geocode.setLanguage('en');

const containerStyle = {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
  // Lookup CSSProperties to see what is available
  width: '100%',
  height: '38rem',
  borderRadius: '20px',
  boxShadow:
    '9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)',
};

function ListingDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listingId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const listing = useSelector((state) => state.listings[listingId]);
  const [showComments, setShowComments] = useState(false);
  const deletingListing = () => dispatch(deleteListing(listing.id));

  const [image, setImage] = useState(listing.imageUrl);

  console.log('the imagesURl is', listing.imageUrl);

  const [style, setStyle] = useState('sd-img');

  const changeStyle = () => {
    if (style === 'sd-img2') {
      setStyle('sd-img');
    } else {
      setStyle('sd-img2');
    }
  };

  const [listingDetailsStyle, setListingDetailsStyle] = useState(
    'listing-elements-body-truncate'
  );

  const changeListingDetailsStyle = () => {
    if (listingDetailsStyle === 'listing-elements-body') {
      setListingDetailsStyle('listing-elements-body-truncate');
    } else {
      setListingDetailsStyle('listing-elements-body');
    }
  };

  const coordinates = {
    lat: parseFloat(listing.lat),
    lng: parseFloat(listing.lng),
  };

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

  if (listing) {
    let d = new Date(listing.createdAt);
    let dateWritten = d.toString().slice(4, 10);

    // if you are logged in and  don't own the listing, then you can make a review and booking for it
    if (listing && sessionUser && listing.authorId !== sessionUser.id) {
      return (
        <>
          <div className='listingDetailsAll'>
            <div id='listing-details'>
              <div className='topListingDetails'>
                {/* <h2 className='listing-elements-title'>{listing.title}</h2>
              <h4 className='listing-elements-city'>{listing.city.slice(0, -5)}</h4> */}
                {/* <p className="listing-elements date-written">{dateWritten}</p> */}
                {/* <img id='sd-img' src={listing.imageUrl} alt='listing' /> */}
              </div>
              <h2 className='listing-elements-title'>{listing.title}</h2>
              <h4 className='listing-elements-city'>
                {listing.city.slice(0, -5)}
              </h4>
              <div className='imageGallery'>
                <div className='topListingDetails'></div>
                <div className='pics'>
                  {image.map((pic) => {
                    return (
                      <button className='bttnforImageLarger'>
                        <img id={style} src={pic} onClick={changeStyle} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className='allListingDetailsAndBooking'>
                <div className='allListingDetails'>
                  <div className='bottomListingDetails'>
                    <h4 className='listing-elements-propertyType'>
                      {listing.propertyType} hosted by {listing.User.name}
                    </h4>
                    <h4 className='listing-elements-propertyType'>
                      ${listing.price === 0 ? listing.price + 1 : listing.price}{' '}
                      / night
                    </h4>
                    {/* <p className='listing-elements-price'>
                    ${listing.price === 0 ? listing.price + 1 : listing.price} / night
                  </p> */}
                  </div>
                  <div className='bottomListingDetails'>
                    <p
                      className={listingDetailsStyle}
                      id='listing-body'
                      onClick={changeListingDetailsStyle}
                    >
                      {renderHTML(listing.body)}
                    </p>
                    <p
                      className='showMoreOrLess'
                      onClick={changeListingDetailsStyle}
                    >
                      <strong>
                        <u>Show More / Less</u>&nbsp;
                      </strong>
                      <strong>
                        <MdOutlineArrowForwardIos />
                      </strong>
                    </p>
                  </div>
                  <div className='mapAndBooking'>
                    <hr></hr>
                    <h2 className='mapHeader'>Where You'll Be</h2>
                    <h3 className='mapCity'>{listing.city}</h3>
                    <LoadScript googleMapsApiKey='AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g'>
                      <div className='allGoogleMapWidgetInfo'>
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={coordinates}
                          zoom={13}
                        >
                          {/* Child components, such as markers, info windows, etc. */}
                          <Marker onLoad={onLoad} position={coordinates} />
                        </GoogleMap>
                      </div>
                    </LoadScript>
                  </div>
                </div>

                <div className='allBookingsSection'>
                  <Bookings />
                </div>
              </div>

              {/* <p className="listing-elements" id="listing-body">{listing.body}</p> */}
              <div className='bottomMapAndReviews'>
                <div className='allReviewsSection'>
                  <Comments />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    // if you do own the listing then you can't review or book it.
    else if (listing && sessionUser && listing.authorId === sessionUser.id) {
      return (
        <>
          <div className='listingDetailsAll'>
            <div id='listing-details'>
              <div className='topListingDetails'>
                {/* <h2 className='listing-elements-title'>{listing.title}</h2>
                <h4 className='listing-elements-city'>{listing.city.slice(0, -5)}</h4> */}
                {/* <p className="listing-elements date-written">{dateWritten}</p> */}
                {/* <img id='sd-img' src={listing.imageUrl} alt='listing' /> */}
              </div>
              <h2 className='listing-elements-title'>{listing.title}</h2>
              <h4 className='listing-elements-city'>
                {listing.city.slice(0, -5)}
              </h4>
              <div className='imageGallery'>
                <div className='topListingDetails'></div>
                <div className='pics'>
                  {image.map((pic) => {
                    return (
                      <button className='bttnforImageLarger'>
                        <img id={style} src={pic} onClick={changeStyle} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className='allListingDetailsAndBooking'>
                <div className='allListingDetails'>
                  <div className='bottomListingDetails'>
                    <h4 className='listing-elements-propertyType'>
                      {listing.propertyType} hosted by {listing.User.name}
                    </h4>
                    <h4 className='listing-elements-propertyType'>
                      ${listing.price === 0 ? listing.price + 1 : listing.price}{' '}
                      / night
                    </h4>
                    {/* <p className='listing-elements-price'>
                      ${listing.price === 0 ? listing.price + 1 : listing.price} / night
                    </p> */}
                  </div>
                  <div className='bottomListingDetails'>
                    <p className='listing-elements-body' id='listing-body'>
                      {renderHTML(listing.body)}
                    </p>
                  </div>
                </div>
              </div>

              {/* <p className="listing-elements" id="listing-body">{listing.body}</p> */}
              <div className='bottomMapAndReviews'>
                <div className='mapAndBooking'>
                  <LoadScript googleMapsApiKey='AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g'>
                    <div className='allGoogleMapWidgetInfo'>
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={coordinates}
                        zoom={13}
                      >
                        {/* Child components, such as markers, info windows, etc. */}
                        <Marker onLoad={onLoad} position={coordinates} />
                      </GoogleMap>
                    </div>
                  </LoadScript>
                </div>
                <div className='allReviewsSection'>
                  <Comments />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    // if you aren't signed in then you can't make a review or booking
    else if (listing) {
      return (
        <>
          <div className='listingDetailsAll'>
            <div id='listing-details'>
              <div className='topListingDetails'>
                {/* <h2 className='listing-elements-title'>{listing.title}</h2>
                <h4 className='listing-elements-city'>{listing.city.slice(0, -5)}</h4> */}
                {/* <p className="listing-elements date-written">{dateWritten}</p> */}
                {/* <img id='sd-img' src={listing.imageUrl} alt='listing' /> */}
              </div>
              <h2 className='listing-elements-title'>{listing.title}</h2>
              <h4 className='listing-elements-city'>
                {listing.city.slice(0, -5)}
              </h4>
              <div className='imageGallery'>
                <div className='topListingDetails'></div>
                <div className='pics'>
                  {image.map((pic) => {
                    return (
                      <button className='bttnforImageLarger'>
                        <img id={style} src={pic} onClick={changeStyle} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className='allListingDetailsAndBooking'>
                <div className='allListingDetails'>
                  <div className='bottomListingDetails'>
                    <h4 className='listing-elements-propertyType'>
                      {listing.propertyType} hosted by {listing.User.name}
                    </h4>
                    <h4 className='listing-elements-propertyType'>
                      ${listing.price === 0 ? listing.price + 1 : listing.price}{' '}
                      / night
                    </h4>
                    {/* <p className='listing-elements-price'>
                      ${listing.price === 0 ? listing.price + 1 : listing.price} / night
                    </p> */}
                  </div>
                  <div className='bottomListingDetails'>
                    <p className='listing-elements-body' id='listing-body'>
                      {renderHTML(listing.body)}
                    </p>
                  </div>
                </div>
              </div>

              {/* <p className="listing-elements" id="listing-body">{listing.body}</p> */}
              <div className='bottomMapAndReviews'>
                <div className='mapAndBooking'>
                  <LoadScript googleMapsApiKey='AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g'>
                    <div className='allGoogleMapWidgetInfo'>
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={coordinates}
                        zoom={13}
                      >
                        {/* Child components, such as markers, info windows, etc. */}
                        <Marker onLoad={onLoad} position={coordinates} />
                      </GoogleMap>
                    </div>
                  </LoadScript>
                </div>
                <div className='allReviewsSection'>
                  <h2 className='comments-title'>Log In To See Reviews</h2>
                  {/* <Comments /> */}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    return null;
  }
}

export default ListingDetail;
