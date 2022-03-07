import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteStory } from '../../store/stories';
import { FaEdit, FaRegUserCircle, FaTrashAlt } from 'react-icons/fa';
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
                        {/* <div id='e-d-btn-ctn'>
                          <NavLink to={`/edit/story/${story.id}`}>
                            <button className='my-5 btn neumorphic-btn' id="editButton" type='submit'>
                              <FaEdit id='editBttnLogo' />
                            </button>
                          </NavLink>
                          <button
                            className='my-5 btn neumorphic-btn'
                            id="deleteButton"
                            type='submit'
                            onClick={() => dispatch(deleteStory(story.id))}
                          >
                            <FaTrashAlt id='trashBttnLogo' />
                          </button>
                        </div> */}
                        {/* <p className='user-name'>{story.User.name}</p> */}
                      {/* <p className="date-written">{dateWritten}</p> */}
                    </div>
                    <div>
                        {/* <img class='neumorphic-image' src={story.imageUrl} alt='story' /> */}
                   </div>
                  </div>
                    </NavLink>
                    <div id='e-d-btn-ctn'>
                          <NavLink to={`/edit/story/${story.id}`}>
                            <button className='my-5 btn neumorphic-btn' id="editButton" type='submit'>
                              <FaEdit />
                            </button>
                          </NavLink>
                          <button
                            className='my-5 btn neumorphic-btn'
                            id="deleteButton"
                            type='submit'
                            onClick={() => dispatch(deleteStory(story.id))}
                          >
                            <FaTrashAlt />
                          </button>
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
