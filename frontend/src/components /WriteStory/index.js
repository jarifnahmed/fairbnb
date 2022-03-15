import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStory } from '../../store/stories';
import { useHistory } from 'react-router-dom';
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';
import './WriteStory.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function WriteStory() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState('100');
  // const [image, setImage] = useState(null);

  // for multiple file upload
  const [images, setImages] = useState([]);
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);

  // for single upload
  // const updateFile = (e) => {
  //   const file = e.target.files[0];
  //   if (file) setImage(file);
  // };

    // for multiple file upload
    const updateFiles = (e) => {
      const files = e.target.files;
      setImages(files);
    };

    console.log('images is ', images)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authorId = sessionUser.id;

    const newStory = {
      authorId,
      title,
      propertyType,
      city,
      lat,
      lng,
      price,
      images,
      body,
    };

    return dispatch(createStory(newStory))
      .then((createdStory) => history.push(`/stories/${createdStory.id}`))
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
      'undo',
      'redo',
    ],
    shouldNotGroupWhenFull: true,
  };

  // const { ref } = usePlacesWidget({
  //   apiKey: 'AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g',
  //   onPlaceSelected: (place) => {
  //     console.log(place);
  //   },
  //   options: {
  //     types: ['(cities)'],
  //     componentRestrictions: { country: 'us' },
  //   },
  // });

  if (sessionUser) {
    return (
      <>
        <div className='story-form-container'>
          <form
            className='story-form'
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <h2 className='ws-title'>Create A Listing</h2>
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
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Cabin">Cabin</option>
                    <option value="Treehouse">Treehouse</option>
                    <option value="Mansion">Mansion</option>
                </select>
            </div>
            <div className='ws-form-field'>
              <label htmlFor='story-city'></label>
              <Autocomplete
                //   apiKey={process.env.REACT_APP_GOOGLE}
                //   style={{ width: "90%" }}
                apiKey={'AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g'}
                onPlaceSelected={(place) => {
                  setCity(place.formatted_address);
                  setCoordinates(place.geometry.location);
                  setLat(JSON.parse(JSON.stringify(place.geometry.location))["lat"]);
                  setLng(JSON.parse(JSON.stringify(place.geometry.location))["lng"]);
                }}
                options={{
                  types: ['(cities)'],
                  componentRestrictions: { country: 'us' },
                }}
                // defaultValue="New York, NY, USA"
                placeholder='City'
                className='sf-input'
                value={city}
                onChange={(place) => setCity(place.formatted_address)}
              />
                {/* <p>{coordinates}</p> */}
                {/* {console.log("story-address lat is", JSON.parse(JSON.stringify(coordinates)).lat)}
                {console.log("story-address lng is", JSON.parse(JSON.stringify(coordinates)).lng)} */}
            </div>
            <div className='ws-form-field'>
              <div className='priceAndDigits'>
                {/* <label htmlFor='price'>Price: </label> */}
                <output name="result" for="price priceValue">${price} / night</output>
              </div>
              <input
                // className='sf-input'
                id='price'
                name="priceValue"
                type='range'
                value={(Math.round(price).toFixed()) === 0 ? (Math.round(price).toFixed()) + 1 : (Math.round(price).toFixed())}
                min='10'
                max="200"
                step="10"
                onChange={(e) => setPrice(e.target.value)}
                list="tickmarks"
                required
              />
              <datalist id="tickmarks">
              <option value="10"></option>
              <option value="20" label="$20"></option>
              <option value="30"></option>
              <option value="40" label="$40"></option>
              <option value="50"></option>
              <option value="60" label="$60"></option>
              <option value="70"></option>
              <option value="80" label="$80"></option>
              <option value="90"></option>
              <option value="100" label="$100"></option>
              <option value="110"></option>
              <option value="120" label="$120"></option>
              <option value="130"></option>
              <option value="140" label="$140"></option>
              <option value="150"></option>
              <option value="160" label="$160"></option>
              <option value="170"></option>
              <option value="180" label="$180"></option>
              <option value="190"></option>
              <option value="200" label="$200"></option>
              </datalist>
            </div>
            <label className='ws-form-field-uploadImage'>
            <div className='centeringChooseFilesButton'>
            <strong>Upload Multiple Images. </strong>Or Drag In Them Below.
            <input
              className='uploadImageButton'
              type="file"
              accept="image/*"
              multiple
              name
              required
              onChange={updateFiles} />
              </div>
              </label>
            <div className='ws-form-field-uploadImage'>
              {/* <label>Upload Image</label>
              <input className='sf-input-uploadImage' type='file' onChange={updateFile} required/> */}
        {/* <label>
            Choose Multiple Files. Or Drag Them Here.</label>
            <input
              className='uploadImageButton'
              type="file"
              multiple
              required
              onChange={updateFiles} /> */}
            </div>
            <div className='ws-form-field'>
              <label htmlFor='content'></label>
              {/* <textarea
                                className="sf-content"
                                id="content"
                                rows="15"
                                cols="70"
                                value={body}
                                placeholder="Description"
                                onChange={(e) => setBody(e.target.value)}
                                required
                                /> */}

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
              Submit
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return history.push('/');
  }
}

export default WriteStory;
