import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { deleteStory } from '../../store/stories';
import Comments from '../Comments';
import EditStory from '../UpdateStory';
import { FaRegUserCircle } from 'react-icons/fa';
import './StoryDetails.css';
import renderHTML from 'react-render-html';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g');
Geocode.setLanguage('en');

const containerStyle = {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
  // Lookup CSSProperties to see what is available
  width: '800px',
  height: '400px',
  borderRadius: '20px',
  boxShadow: '9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)',
};

function StoryDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { storyId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const story = useSelector((state) => state.stories[storyId]);
  const [showComments, setShowComments] = useState(false);
  const deletingStory = () => dispatch(deleteStory(story.id));

  const coordinates = {
    lat: parseFloat(story.lat),
    lng: parseFloat(story.lng),
  };

  const position = {
    lat: parseFloat(story.lat),
    lng: parseFloat(story.lng),
  };

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

  if (story) {
    let d = new Date(story.createdAt);
    let dateWritten = d.toString().slice(4, 10);

    return (
      <>
        <div className='storyDetailsAll'>
            <div id='story-details'>
              <h2 className='story-elements-title'>{story.title}</h2>
              <h4 className='story-elements-city'>{story.city.slice(0, -5)}</h4>
              <h4 className='story-elements-propertyType'>
                {story.propertyType}
              </h4>
              {/* <p className='story-elements-lat'>{story.lat}</p>
              <p className='story-elements-lng'>{story.lng}</p> */}
              <p className='story-elements-userName'>
                Hosted by {story.User.name}
              </p>
              <p className='story-elements-price'>
                ${story.price == 0 ? story.price + 1 : story.price}
              </p>
              {/* <p className="story-elements date-written">{dateWritten}</p> */}
              <img id='sd-img' src={story.imageUrl} alt='story' />
              {/* <p className="story-elements" id="story-body">{story.body}</p> */}
              <p className='story-elements-body' id='story-body'>
                {renderHTML(story.body)}
              </p>
                <LoadScript googleMapsApiKey='AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g'>
              <div className='allGoogleMapWidgetInfo'>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coordinates}
                    zoom={13}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    <Marker onLoad={onLoad} position={position} />
                  </GoogleMap>
                </div>
                </LoadScript>
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
