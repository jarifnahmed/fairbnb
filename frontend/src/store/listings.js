import { csrfFetch } from './csrf';

const LOAD_LISTING = 'listings/LOAD';
const ADD_LISTING = 'listings/ADD_LISTING';
const UPDATE_LISTING = 'listings/UPDATE_LISTING';
const DELETE_LISTING = 'listings/DELETE_LISTING';

const loadListing = (listings) => ({
  type: LOAD_LISTING,
  listings,
});

const addOneListing = (newListing) => ({
  type: ADD_LISTING,
  newListing,
});

const updateOneListing = (updatedListing) => ({
  type: UPDATE_LISTING,
  updatedListing,
});

const deleteOneListing = (deletedListingId) => ({
  type: DELETE_LISTING,
  deletedListingId,
});

export const getListings = () => async (dispatch) => {
  const response = await csrfFetch(`/api/listings`);

  if (response.ok) {
    const listings = await response.json();
    dispatch(loadListing(listings));
  }
};

export const createListing = (newListing) => async (dispatch) => {
  const {
    authorId,
    title,
    propertyType,
    city,
    lat,
    lng,
    price,
    image,
    images,
    body,
  } = newListing;
  const formData = new FormData();
  formData.append('authorId', authorId);
  formData.append('title', title);
  formData.append('propertyType', propertyType);
  formData.append('city', city);
  formData.append('lat', lat);
  formData.append('lng', lng);
  formData.append('price', price);
  formData.append('body', body);

  // for multiple files
  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
  }

  // for single file
  if (image) formData.append('image', image);

  const response = await csrfFetch(`/api/listings`, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  });

  if (response.ok) {
    const newListing = await response.json();
    dispatch(addOneListing(newListing));
    return newListing;
  }
};

export const updateListing = (updateListing) => async (dispatch) => {
  const {
    id,
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
  } = updateListing;
  const formData = new FormData();
  formData.append('id', id);
  formData.append('authorId', authorId);
  formData.append('title', title);
  formData.append('propertyType', propertyType);
  formData.append('lat', lat);
  formData.append('lng', lng);
  formData.append('city', city);
  formData.append('price', price);
  formData.append('body', body);

  // for multiple files
  if (oldImage && oldImage.length !== 0) {
    for (var i = 0; i < oldImage.length; i++) {
      formData.append('imageUrl', oldImage[i]);
    }
  }
  if (newImage && newImage.length !== 0) {
    for (var i = 0; i < newImage.length; i++) {
      formData.append('imageUrl', newImage[i]);
    }
  }

  // for single file
  // if (oldImage) formData.append('imageUrl', oldImage);
  // if (newImage) formData.append('imageUrl', newImage);

  const response = await csrfFetch(`/api/listings/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  });

  if (response.ok) {
    const updatedListing = await response.json();
    dispatch(updateOneListing(updatedListing));
    return updatedListing;
  }
};

export const deleteListing = (listingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/listings/delete/${listingId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const deletedListingId = await response.json();
    dispatch(deleteOneListing(deletedListingId));
  }
};

const initialState = {};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LISTING: {
      const newState = {};
      action.listings.forEach((listing) => {
        newState[listing.id] = listing;
      });
      return newState;
    }
    case ADD_LISTING: {
      const newState = { ...state };
      newState[action.newListing.id] = { ...action.newListing };
      return newState;
    }
    case UPDATE_LISTING: {
      const newState = { ...state };
      newState[action.updatedListing.id] = { ...action.updatedListing };
      return newState;
    }
    case DELETE_LISTING: {
      const newState = { ...state };
      delete newState[action.deletedListingId];
      return newState;
    }
    default:
      return state;
  }
};

export default listingsReducer;
