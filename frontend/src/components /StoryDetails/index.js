import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import Comments from '../Comments';
import './StoryDetails.css';


import renderHTML from 'react-render-html';


import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g");
Geocode.setLanguage("en");

const containerStyle = {
  width: '400px',
  height: '400px'
};


function StoryDetail() {
  const { storyId } = useParams();
  const story = useSelector((state) => state.stories[storyId]);
  const [showComments, setShowComments] = useState(false);

  const coordinates = {
    lat: parseFloat(story.lat),
    lng: parseFloat(story.lng),
  };

  const position = {
    lat: parseFloat(story.lat),
    lng: parseFloat(story.lng),
  }

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  if (story) {
    let d = new Date(story.createdAt);
    let dateWritten = d.toString().slice(4, 10);

    return (
      <>
        <div id='story-comments'>
          <div id='story-details'>
            <h2 className='story-elements'>{story.title}</h2>
            <h4 className='story-elements address'>{story.address}</h4>
            <p className="address">{story.lat}</p>
            <p className="address">{story.lng}</p>
            <p className='story-elements user-name'>Provided by {story.User.name}</p>
            <p className='story-elements user-name'>
              ${(story.price) == 0 ? (story.price) + 1 : (story.price)}
            </p>
            {/* <p className="story-elements date-written">{dateWritten}</p> */}
            <img id='sd-img' src={story.imageUrl} alt='story' />
            {/* <p className="story-elements" id="story-body">{story.body}</p> */}
            <p className='story-elements' id='story-body'>
              {renderHTML(story.body)}
            </p>






        <LoadScript googleMapsApiKey="AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={13}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>

          <Marker
      onLoad={onLoad}
      position={position}
    />
        </GoogleMap>
       </LoadScript>












          <Comments />
          </div>
          <div
            className='sidebar'
            style={showComments ? { transform: 'translateX(-100%)' } : {}}
          >
            <span id='sidebar-close' onClick={() => setShowComments(false)}>
              X
            </span>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default StoryDetail;
