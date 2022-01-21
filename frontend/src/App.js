import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//import components
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Homepage from './components/HomePage';
import User from './components/User';
import ListingDetail from './components/ListingDetails';
import UserListings from './components/UserListings';
import WriteListing from './components/WriteListing';
import EditListing from './components/UpdateListing';
import { getListings } from './store/listings';
import { getReviews } from "./store/reviews";

//import thunk
import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) {
    const sessionUserUserName = sessionUser.username;
  }
  // const sessionUserUserName = sessionUser.username;

  useEffect(() => {
    dispatch(getListings());
    dispatch(getReviews());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route> */}
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/username'>
          {/* <Route path='/listings'> */}
          {/* <Route path={`/${sessionUserUserName}`}> */}
            <User />
          </Route>
          <Route path='/user/listings'>
            <UserListings />
          </Route>
          <Route path='/listings/new'>
            <WriteListing />
          </Route>
          <Route path='/listings/:listingId'>
            <ListingDetail />
          </Route>
          <Route path='/edit/listing/:editListingId'>
            <EditListing />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
