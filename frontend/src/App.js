import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components /Navigation";
import Homepage from "./components /HomePage";
import Userdashboard from "./components /UserDashboard";
import StoryDetail from "./components /StoryDetails";
import UserStories from "./components /UserStories";
import WriteStory from "./components /WriteStory";
import EditStory from "./components /UpdateStory";
import Footer from "./components /Footer";
import { getStories } from "./store/stories";
import { getComments } from "./store/comments";
import { getBookings } from "./store/bookings";
import PageNotFound from "./components /PageNotFound";
import UserBookings from "./components /UserBookings";


function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getStories());
    dispatch(getComments());
    dispatch(getBookings());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <Switch>
        <Route path="/" exact>
            <Homepage />
        </Route>
        <Route path="/stories/:storyId">
          <StoryDetail />
        </Route>
        <Route path="/user/dashboard">
          <Userdashboard />
        </Route>
        <Route path="/user/stories">
          <UserStories />
        </Route>
        <Route path="/story/new">
          <WriteStory />
        </Route>
        <Route path="/edit/story/:editStoryId">
          <EditStory />
        </Route>
        <Route path="/user/bookings">
          <UserBookings />
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
      )}
        {/* <Footer /> */}
    </>
  );
}

export default App;
