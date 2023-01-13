import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
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
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/listings/:listingId'>
            <ListingDetail />
          </Route>
          <Route path='/user/dashboard'>
            <Userdashboard />
          </Route>
          <Route path='/user/listings'>
            <UserListings />
          </Route>
          <Route path='/listing/new'>
            <WriteListing />
          </Route>
          <Route path='/edit/listing/:editListingId'>
            <EditListing />
          </Route>
          <Route path='/user/bookings'>
            <UserBookings />
          </Route>
          <Route path='/'>
            <PageNotFound />
          </Route>
        </Switch>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default App;
