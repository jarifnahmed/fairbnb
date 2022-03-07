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
      <div class="container card-collection p-4">
</div>
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

                <div className='neumorphic-card mx-auto'>
                  <div className='neumorphic-card__outer'>
                      {/* <h2 className='title'>{story.title}</h2> */}
                      <img class='neumorphic-image' src={story.imageUrl} alt='story' />
                      <p className="neumorphic-card__title">{story.city.slice(0,-5)}</p>
                      <div className="propertyTypeAndPriceLine">
                        <p className='neumorphic-card__text'>{story.propertyType}</p>
                        <p className="neumorphic-card__text">${(story.price) == 0 ? (story.price) + 1 : (story.price)} / night</p>
                      </div>
                      {/* <p className='user-name'>{story.User.name}</p> */}
                    {/* <p className="date-written">{dateWritten}</p> */}
                  </div>
                  <div>
                      {/* <img class='neumorphic-image' src={story.imageUrl} alt='story' /> */}
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
