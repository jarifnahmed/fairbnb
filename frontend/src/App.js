import React, { useState, useEffect } from 'react';
import { Routes , Route } from 'react-router';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';
import Navigation from './components /Navigation';
import Homepage from './components /HomePage';
import Userdashboard from './components /UserDashboard';
import ListingDetail from './components /ListingDetails';
import UserListings from './components /UserListings';
import WriteListing from './components /WriteListing';
import EditListing from './components /UpdateListing';
// import Footer from './components /Footer';
import { getListings } from './store/listings';
import { getReviews } from './store/reviews';
import { getBookings } from './store/bookings';
import PageNotFound from './components /PageNotFound';
import UserBookings from './components /UserBookings';
import {Helmet} from "react-helmet";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getListings());
    dispatch(getReviews());
    dispatch(getBookings());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Helmet>
            <meta name="google" content="notranslate"></meta>
        </Helmet>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Routes >
          <Route exact="true" path="/" element={<Homepage />} />
          <Route path="/listings/:listingId" element={<ListingDetail />} />
          <Route path="/user/dashboard" element={<Userdashboard />} />
          <Route path="/user/listings" element={<UserListings />} />
          <Route path="/listing/new" element={<WriteListing />} />
          <Route path="/edit/listing/:editListingId" element={<EditListing />} />
          <Route path="/user/bookings" element={<UserBookings />} />
          <Route path="/" element={<PageNotFound />} />
        </Routes >
      )}
      {/* <Footer /> */}
    </>
  );
}

export default App;
