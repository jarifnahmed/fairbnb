import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteStory } from '../../store/stories';
import { FaEdit, FaRegUserCircle } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import './UserStories.css';

function UserStories() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const allStories = useSelector((state) => state.stories);
  const storiesArr = Object.values(allStories);

  let userStories;

  if (sessionUser) {
    userStories = storiesArr.filter(
      (story) => story.authorId === sessionUser.id
    );

    return (
      <>
        <div className='ud-feed-container'>
          <div className='ud-left-div'></div>
          <div className='ud-center-div'>
            <h2 className='rec-title'>My Listings</h2>
            <ul>
              {userStories.map((story) => {
                let d = new Date(story.createdAt);
                let dateWritten = d.toString().slice(4, 10);
                return (
                  <li key={story.id} className='feed-list'>
                    <div className='story-container'>
                      <div className='story-details'>
                        {/* <p className="user-name">{story.User.name}</p> */}
                        <NavLink
                          className='story-link'
                          to={`/stories/${story.id}`}
                        >
                          <h2>{story.title}</h2>
                          <p className='address'>{story.address}</p>
                          <p className='address'>${(story.price) == 0 ? (story.price) + 1 : (story.price)}</p>
                        </NavLink>
                        {/* <p className="date-written">{dateWritten}</p> */}
                        <div id='e-d-btn-ctn'>
                          <NavLink to={`/edit/story/${story.id}`}>
                            <button className='edit-del-btn' type='submit'>
                              Edit
                            </button>
                          </NavLink>
                          <button
                            className='edit-del-btn'
                            type='submit'
                            onClick={() => dispatch(deleteStory(story.id))}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div>
                        <NavLink
                          className='story-link'
                          to={`/stories/${story.id}`}
                        >
                          <img id='feed-img' src={story.imageUrl} alt='story' />
                        </NavLink>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='ud-right-div'></div>
        </div>
      </>
    );
  } else {
    return history.push('/');
  }
}

export default UserStories;
