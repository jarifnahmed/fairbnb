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
  const [price, setPrice] = useState(story.price);
  const [oldImage, setOldImage] = useState(story.imageUrl);
  const [showImg, setShowImg] = useState(true);
  const [newImage, setNewImage] = useState(null);
  const [body, setBody] = useState(story.body);
  const [errors, setErrors] = useState([]);

  if (sessionUser && story) {
    const updateFile = (e) => {
      const file = e.target.files[0];
      if (file) setNewImage(file);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const authorId = sessionUser.id;

      const editedStory = {
        id: editStoryId,
        authorId,
        title,
        city,
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
        'bulletedList',
        'numberedList',
        '|',
        // 'code', 'codeBlock', '|',
        //   'insertTable', '|',
        'blockQuote',
        '|',
        'undo',
        'redo',
      ],
      shouldNotGroupWhenFull: true,
    };

    return (
      <>
        <div className='story-form-container'>
          <form className='story-form' onSubmit={handleSubmit}             autoComplete='off'>
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
              <label htmlFor='story-price'></label>
              <input
                className='sf-input'
                id='story-price'
                type='number'
                value={(Math.round(price).toFixed()) == 0 ? (Math.round(price).toFixed()) + 1 : (Math.round(price).toFixed())}
                placeholder='Price'
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className='ws-form-field'>
              {showImg && (
                <>
                  <label></label>
                  <div className='old-img-cnt'>
                    <span
                      className='close'
                      onClick={() => {
                        setShowImg(false);
                        setOldImage(null);
                      }}
                    >
                      X
                    </span>
                    <img className='old-img' src={oldImage} alt='existing' />
                  </div>
                </>
              )}
              <label></label>
              <input className='sf-input' type='file' onChange={updateFile} />
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
