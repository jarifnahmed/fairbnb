import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { updateStory } from '../../store/stories';
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';
import './UpdateStory.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EditStory() {
  const sessionUser = useSelector((state) => state.session.user);
  const { editStoryId } = useParams();
  const story = useSelector((state) => state.stories[editStoryId]);
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(story.title);
  const [city, setCity] = useState(story.city);
  const [lat, setLat] = useState(story.lat);
  const [lng, setLng] = useState(story.lng);
  const [coordinates, setCoordinates] = useState('');
  const [propertyType, setPropertyType] = useState(story.propertyType);
  const [price, setPrice] = useState(story.price);
  const [oldImage, setOldImage] = useState(story.imageUrl);
  const [showImg, setShowImg] = useState(true);
  const [newImage, setNewImage] = useState([]);
  const [body, setBody] = useState(story.body);
  const [errors, setErrors] = useState([]);

  if (sessionUser && story) {
    const updateFile = (e) => {
      const file = e.target.files[0];
      if (file) setNewImage(file);
    };

    const updateFiles = (e) => {
      const files = e.target.files;
      if (files) setNewImage(files);
      console.log('files is ', files);
    };

    console.log('oldImage is ', oldImage);
    console.log('newImage is ', newImage);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const authorId = sessionUser.id;

      const editedStory = {
        id: editStoryId,
        authorId,
        title,
        propertyType,
        city,
        lat,
        lng,
        price,
        oldImage,
        newImage,
        body,
      };

      return dispatch(updateStory(editedStory))
        .then((updatedStory) => history.push(`/stories/${updatedStory.id}`))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    };

    const editorConfiguration = {
      toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        '|',
        'link',
        '|',
        // 'outdent', 'indent', '|',
        'numberedList',
        '|',
        // 'code', 'codeBlock', '|',
        //   'insertTable', '|',
        'undo',
        'redo',
      ],
      shouldNotGroupWhenFull: true,
    };

    return (
      <>
        <div className='story-form-container'>
          <form
            className='story-form'
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <h2 className='ws-title'>Edit Listing</h2>
            <ul className='ws-errors'>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className='ws-form-field'>
              <label htmlFor='title'></label>
              <input
                className='sf-input'
                id='title'
                type='text'
                value={title}
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <label htmlFor='propertyType'></label>
              <select
                className='sf-input'
                id='propertyType'
                type='text'
                value={propertyType}
                placeholder='Property Type'
                onChange={(e) => setPropertyType(e.target.value)}
                required
              >
                <option value='House'>House</option>
                <option value='Condo'>Condo</option>
                <option value='Apartment'>Apartment</option>
                <option value='Townhouse'>Townhouse</option>
                <option value='Cabin'>Cabin</option>
                <option value='Treehouse'>Treehouse</option>
                <option value='Mansion'>Mansion</option>
              </select>
            </div>
            <div className='ws-form-field'>
              <label htmlFor='story-city'></label>
              {/* <input
                className='sf-input'
                id='story-city'
                type='text'
                value={city}
                placeholder='Address'
                onChange={(e) => setCity(e.target.value)}
                required
              /> */}
              <Autocomplete
                //   apiKey={process.env.REACT_APP_GOOGLE}
                //   style={{ width: "90%" }}
                apiKey={'AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g'}
                onPlaceSelected={(place) => {
                  setCity(place.formatted_address);
                  setCoordinates(place.geometry.location);
                  setLat(
                    JSON.parse(JSON.stringify(place.geometry.location))['lat']
                  );
                  setLng(
                    JSON.parse(JSON.stringify(place.geometry.location))['lng']
                  );
                }}
                options={{
                  types: ['(cities)'],
                  componentRestrictions: { country: 'us' },
                }}
                // defaultValue="New York, NY, USA"
                placeholder='City'
                value={city}
                onChange={(place) => setCity(place.formatted_address)}
              />
            </div>
            <div className='ws-form-field'>
              <div className='priceAndDigits'>
                <label htmlFor='price'>Price: </label>
                <output name='result' for='price priceValue'>
                  ${price} / night
                </output>
              </div>
              <input
                // className='sf-input'
                id='price'
                name='priceValue'
                type='range'
                value={
                  Math.round(price).toFixed() == 0
                    ? Math.round(price).toFixed() + 1
                    : Math.round(price).toFixed()
                }
                min='10'
                max='200'
                step='10'
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className='ws-form-field'>
              {showImg && (
                <>
                  <div className='old-img-cnt'>
                    {oldImage.map((pic) => {
                      return (
                        <div
                          onClick={() => {
                            setShowImg(false);
                            setOldImage([]);
                          }}
                        >
                          X
                          <img className='rowPics' src={pic} />
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              <label></label>
              <input
                className='sf-input'
                multiple
                type='file'
                onChange={updateFiles}
              />
            </div>
            {/* <div className="ws-form-field">
                            <label htmlFor="content"></label>
                                <textarea
                                className="sf-content"
                                id="content"
                                rows="15"
                                cols="70"
                                value={body}
                                placeholder="Description"
                                onChange={(e) => setBody(e.target.value)}
                                required
                                />
                        </div> */}

            <div className='ws-form-field'>
              <label htmlFor='content'></label>
              <CKEditor
                className='input-data'
                editor={ClassicEditor}
                config={editorConfiguration}
                data={body}
                onChange={(event, editor) => {
                  const data = editor.getData();

                  setBody(data);
                }}
                required
              />
            </div>

            <button className='ws-button' type='submit'>
              Update
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return history.push('/');
  }
}

export default EditStory;
