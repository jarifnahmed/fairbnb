import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createListing } from '../../store/listings';
import { useHistory } from 'react-router-dom';
import './WriteListing.css';

function WriteListing() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [body, setBody] = useState('');

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const userId = sessionUser.id;
    const userId = sessionUser.id;

    // const newListing = {
    //   userId,
    //   title,
    //   subtitle,
    //   imageUrl,
    //   body,
    // };

    const newListing = {
      userId,
      name,
      address,
      city,
      state,
      country,
      price,
      description,
      imageUrl,
    };

    return dispatch(createListing(newListing))
      .then((createdListing) => history.push(`/listings/${createdListing.id}`))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  if (sessionUser) {
    return (
      <>
        <div className='listing-form-container'>
          <form className='listing-form' onSubmit={handleSubmit}>
            <h2 className='ws-title'>Upload A New Listing</h2>
            <ul className='ws-errors'>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='name'
                type='text'
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='address'
                type='text'
                value={address}
                placeholder='Address'
                onChange={(e) => setAddress(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='city'
                type='text'
                value={city}
                placeholder='City'
                onChange={(e) => setCity(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='state'
                type='text'
                value={state}
                placeholder='State'
                onChange={(e) => setState(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='country'
                type='text'
                value={country}
                placeholder='Country'
                onChange={(e) => setCountry(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='price'
                type='text'
                value={price}
                placeholder='Price'
                onChange={(e) => setPrice(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <textarea
                className='sf-content'
                id='description'
                rows='5'
                cols='60'
                value={description}
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='image'
                type='text'
                value={imageUrl}
                placeholder='Image URL'
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            <button className='ws-button' type='submit'>
              Upload
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return history.push('/');
  }
}

export default WriteListing;
