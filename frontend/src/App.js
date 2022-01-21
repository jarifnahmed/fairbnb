import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//import components
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Homepage from './components/HomePage';
import User from './components/User';
import StoryDetail from './components/StoryDetails';
import UserStories from './components/UserStories';
import WriteStory from './components/WriteStory';
import EditStory from './components/UpdateStory';
import { getStories } from './store/stories';
import { getComments } from "./store/comments";

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
    dispatch(getStories());
    dispatch(getComments());
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
          {/* <Route path='/username'> */}
          <Route path='/listings'>
          {/* <Route path={`/${sessionUserUserName}`}> */}
            <User />
          </Route>
          {/* <Route path='/user/photos'>
            <UserStories />
          </Route>
          <Route path='/photo/new'>
            <WriteStory />
          </Route>
          <Route path='/photos/:storyId'>
            <StoryDetail />
          </Route>
          <Route path='/edit/photo/:editStoryId'>
            <EditStory />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
