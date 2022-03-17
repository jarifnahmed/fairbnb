import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { deleteStory } from '../../store/stories';
import Comments from '../Comments';
import EditStory from '../UpdateStory';
import { FaRegUserCircle } from 'react-icons/fa';
import './StoryDetails.css';
import renderHTML from 'react-render-html';

import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import { Slide } from 'react-slideshow-image';

import Bookings from '../Bookings';



import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g');
Geocode.setLanguage('en');


const containerStyle = {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
  // Lookup CSSProperties to see what is available
  width: '1000px',
  height: '600px',
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

  const [image, setImage] = useState(story.imageUrl);


  const [style, setStyle] = useState("sd-img");

  const changeStyle = () => {
    if(style==='sd-img2'){
      setStyle("sd-img");
    } else {
      setStyle("sd-img2");
    }
  };

  const coordinates = {
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
              <div className='topStoryDetails'>
              {/* <h2 className='story-elements-title'>{story.title}</h2>
              <h4 className='story-elements-city'>{story.city.slice(0, -5)}</h4> */}
              {/* <p className="story-elements date-written">{dateWritten}</p> */}
              {/* <img id='sd-img' src={story.imageUrl} alt='story' /> */}
                </div>
                <h2 className='story-elements-title'>{story.title}</h2>
                <h4 className='story-elements-city'>{story.city.slice(0, -5)}</h4>
              <div className='imageGallery'>
              <div className='topStoryDetails'>
                </div>
                <div className='pics'>
                  {image.map((pic) => {
                    return (
                      <button className='bttnforImageLarger'>
                        <img id={style} src={pic} onClick={changeStyle}/>

                      </button>
                      );
                    })}

                  </div>

                </div>

                <div className='bottomStoryDetails'>
                  <h4 className='story-elements-propertyType'>{story.propertyType} hosted by {story.User.name} for ${story.price === 0 ? story.price + 1 : story.price} / night</h4>
                  {/* <p className='story-elements-price'>
                    ${story.price === 0 ? story.price + 1 : story.price} / night
                  </p> */}
                  </div>
                  <div className='bottomStoryDetails'>
                    <p className='story-elements-body' id='story-body'>
                      {renderHTML(story.body)}
                    </p>
                  </div>
              {/* <p className="story-elements" id="story-body">{story.body}</p> */}
              <div className='bottomStoryDetails'>
                <LoadScript googleMapsApiKey='AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g'>
              <div className='allGoogleMapWidgetInfo'>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coordinates}
                    zoom={13}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    <Marker onLoad={onLoad} position={coordinates} />
                  </GoogleMap>
                </div>
                </LoadScript>
              <div className='allReviewsSection'>
                <Comments />
              </div>
              <div className='allBookingsSection'>
                <Bookings />
              </div>
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
