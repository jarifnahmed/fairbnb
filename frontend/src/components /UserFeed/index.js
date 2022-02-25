import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import './UserFeed.css';
// import "../SearchBad/SearchBad.css"

import Search from '../Search/index';
import SearchBad from '../SearchBad/index';

function UserFeed() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const sessionUser = useSelector((state) => state.session.user);
  const allStories = useSelector((state) => state.stories);
  const storiesArr = Object.values(allStories);

  const filterStories = (recStories, query) => {
    if (!query) {
      return recStories;
    }

    return recStories.filter((story) => {
      const storyTitleSearch = story.title.toLowerCase();
      const storyCitySearch = story.city.toLowerCase();
      return (storyTitleSearch.includes(query.toLowerCase())) || (storyCitySearch.includes(query.toLowerCase()));
    });
  };

  const recStories = filterStories(
    storiesArr.filter((story) => story.authorId !== sessionUser.id),
    searchQuery
  );

  if (recStories.length) {
    return (
      <>
        <h2 className='rec-title'>Recommended Listings</h2>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <h2 className='rec-title'>
          {' '}
          There {recStories.length > 1 ? 'are' : 'is'} {recStories.length}{' '}
          {recStories.length > 1 ? 'listings' : 'listing'}.
        </h2>
        <ul>
          {recStories.map((story) => {
            let d = new Date(story.createdAt);
            let dateWritten = d.toString().slice(4, 10);
            return (
              <li key={story.id} className='feed-list'>
                <NavLink className='story-link' to={`/stories/${story.id}`}>
                <div className='story-container'>
                  <div className='story-details'>
                      <h2 className='title'>{story.title}</h2>
                      <p className="city">{story.city}</p>
                      <p className="price">${(story.price) == 0 ? (story.price) + 1 : (story.price)}</p>
                      <p className='user-name'>{story.User.name}</p>
                    {/* <p className="date-written">{dateWritten}</p> */}
                  </div>
                  <div>
                      <img id='feed-img' src={story.imageUrl} alt='story' />
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
    return (
      <>
        <h2 className='rec-title'>Recommended Listings</h2>
        <SearchBad searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <h2 className='rec-title'>No Listings Match Current Search</h2>
      </>
    );
  }
}

export default UserFeed;
