import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { updateListing } from '../../store/listings';

function EditListing() {
  const sessionUser = useSelector((state) => state.session.user);
  const { editListingId } = useParams();
  const listing = useSelector((state) => state.listings[editListingId]);
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(listing.title);
  const [subtitle, setSubtitle] = useState(listing.subtitle);
  const [imageUrl, setImageUrl] = useState(listing.imageUrl);
  const [body, setBody] = useState(listing.body);
  const [errors, setErrors] = useState([]);

  if (sessionUser && listing) {
    const handleSubmit = async (e) => {
      e.preventDefault();

      const authorId = sessionUser.id;

      const editedListing = {
        id: editListingId,
        authorId,
        title,
        subtitle,
        imageUrl,
        body,
      };

      return dispatch(updateListing(editedListing))
        .then((updatedListing) =>
          history.push(`/listings/${updatedListing.id}`)
        )
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    };

    return (
      <>
        <div className='listing-form-container'>
          <form className='listing-form' onSubmit={handleSubmit}>
            <h2 className='ws-title'>Edit Listing Details</h2>
            <ul className='ws-errors'>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='listing-subtitle'
                type='text'
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                required
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='image'
                type='text'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            {/* <div className='ws-form-field'>
              <textarea
                className='sf-content'
                id='content'
                rows="5"
                cols="60"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div> */}
            <button className='ws-button' type='submit'>
              Edit
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return history.push('/');
  }
}

export default EditListing;
