import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteStory } from '../../store/stories';
import Comments from '../Comments';
import EditStory from '../UpdateStory';
import { FaRegUserCircle } from 'react-icons/fa';
import './StoryDetails.css';

import renderHTML from 'react-render-html';

function StoryDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { storyId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const story = useSelector((state) => state.stories[storyId]);
  const [showComments, setShowComments] = useState(false);
  const deletingStory = () => dispatch(deleteStory(story.id));

  if (story) {
    let d = new Date(story.createdAt);
    let dateWritten = d.toString().slice(4, 10);

    return (
      <>
        <div id='story-comments'>
          <div id='story-details'>
          <h2 className='story-elements-title'>{story.title}</h2>
            <h4 className='story-elements-city'>{story.city}</h4>
            <h4 className='story-elements-propertyType'>{story.propertyType}</h4>
            {/* <p className='story-elements-lat'>{story.lat}</p>
            <p className='story-elements-lng'>{story.lng}</p> */}
            <p className='story-elements-userName'>Hosted by {story.User.name}</p>
            <p className='story-elements-price'>
              ${(story.price) == 0 ? (story.price) + 1 : (story.price)}
            </p>
            {/* <p className="story-elements date-written">{dateWritten}</p> */}
            <img id='sd-img' src={story.imageUrl} alt='story' />
            {/* <p className="story-elements" id="story-body">{story.body}</p> */}
            <p className='story-elements-body' id='story-body'>
              {renderHTML(story.body)}
            </p>
              <div className='allReviewsSection'>
              <Comments />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default StoryDetail;
