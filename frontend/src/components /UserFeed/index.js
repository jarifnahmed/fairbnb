import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import './UserFeed.css';
// import "../SearchBad/SearchBad.css"

import Search from '../Search/index';
import SearchBad from '../SearchBad/index';
import { useState } from 'react';

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
        const storyTitle = story.title.toLowerCase();
        return storyTitle.includes(query);
    });
};



const recStories = filterStories(storiesArr.filter(
  (story) => story.authorId !== sessionUser.id
), searchQuery);

  if (recStories.length) {
    return (
      <>
        <h2 className='rec-title'>Recommended Listings</h2>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ul>
          {recStories.map((story) => {
            let d = new Date(story.createdAt);
            let dateWritten = d.toString().slice(4, 10);
            return (
              <li key={story.id} className='feed-list'>
                <div className='story-container'>
                  <div className='story-details'>
                    <p className='user-name'>
                      {story.User.name}
                    </p>
                    <NavLink className='story-link' to={`/stories/${story.id}`}>
                      <h2>{story.title}</h2>
                      {/* <p className='subtitle'>{story.subtitle}</p> */}
                    </NavLink>
                    {/* <p className='date-written'>{dateWritten}</p> */}
                  </div>
                  <div>
                    <NavLink className='story-link' to={`/stories/${story.id}`}>
                      <img id='feed-img' src={story.imageUrl} alt='story' />
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return (
      <>
      <h2 className='rec-title'>No Listings Match Current Search</h2>
          {/* <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          /> */}
          <SearchBad
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
      </>
    )
  }
}

export default UserFeed;
